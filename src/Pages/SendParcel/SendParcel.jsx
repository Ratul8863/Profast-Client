import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useAuth from '../../Hooks/useAuth';
import serviceCenters from '../../../public/coverageData.json';

const MySwal = withReactContent(Swal);

const SendParcel = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { user } = useAuth();
  const [type, setType] = useState('document');

  const [regions, setRegions] = useState([]);
  const [pickupCenters, setPickupCenters] = useState([]);
  const [deliveryCenters, setDeliveryCenters] = useState([]);

  useEffect(() => {
    const uniqueRegions = [...new Set(serviceCenters.map(center => center.region))];
    setRegions(uniqueRegions);
  }, []);

  const handleRegionChange = (region, isPickup = true) => {
    const filtered = serviceCenters.filter(center => center.region === region);
    if (isPickup) setPickupCenters(filtered);
    else setDeliveryCenters(filtered);
  };

  const calculateCost = (data, type, pickupDistrict, deliveryDistrict) => {
    const withinSameDistrict = pickupDistrict === deliveryDistrict;

    if (type === 'document') return withinSameDistrict ? 60 : 80;

    let cost = withinSameDistrict ? 110 : 150;

    const weight = parseFloat(data.weight);
    if (weight > 3) {
      const extraKg = weight - 3;
      cost += Math.ceil(extraKg) * 40;
      if (!withinSameDistrict) cost += 40; // extra if outside district
    }

    return cost;
  };

  const onSubmit = data => {
    const selectedPickup = pickupCenters.find(center => center.district === data.pickupServiceCenter);
    const selectedDelivery = deliveryCenters.find(center => center.district === data.deliveryServiceCenter);

    const totalCost = calculateCost(data, type, selectedPickup?.district, selectedDelivery?.district);
    const trackingId = Math.random().toString(36).substr(2, 9).toUpperCase();

    MySwal.fire({
      title: 'Confirm Your Parcel',
      html: `
        <div class="text-left text-sm">
          <p><strong>Type:</strong> ${type}</p>
          ${type === 'non-document' ? `<p><strong>Weight:</strong> ${data.weight}kg</p>` : ''}
          <p><strong>Pickup:</strong> ${selectedPickup?.district}</p>
          <p><strong>Delivery:</strong> ${selectedDelivery?.district}</p>
          <p><strong>Base Cost:</strong> ৳${type === 'document' ? (selectedPickup?.district === selectedDelivery?.district ? 60 : 80) : (selectedPickup?.district === selectedDelivery?.district ? 110 : 150)}</p>
          ${type === 'non-document' && parseFloat(data.weight) > 3 ? `<p><strong>Extra Weight Cost:</strong> ৳${Math.ceil(parseFloat(data.weight) - 3) * 40}</p>` : ''}
          ${type === 'non-document' && selectedPickup?.district !== selectedDelivery?.district ? `<p><strong>Outside District Extra:</strong> ৳40</p>` : ''}
          <hr class="my-2" />
          <p class="text-lg font-bold">Total: ৳${totalCost}</p>
        </div>`,
      showCancelButton: true,
      confirmButtonText: 'Proceed to Payment',
      cancelButtonText: 'Edit Info',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        const parcelData = {
          ...data,
          type,
          weight: type === 'non-document' ? data.weight : 'N/A',
          createdBy: user?.email,
          createdAt: new Date().toISOString(),
          trackingId,
          parcelStatus: 'Pending',
          paymentStatus: 'Unpaid',
          totalCost
        };

        console.log('Final Parcel Data:', parcelData);
        // send to backend here
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Send a Parcel</h1>
      <p className="text-gray-500 mb-4">Fill out the form below to create a new parcel for delivery.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Parcel Info */}
        <div className="border p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Parcel Info</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" value="document" checked={type === 'document'} onChange={() => setType('document')} className="radio" /> Document
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" value="non-document" checked={type === 'non-document'} onChange={() => setType('non-document')} className="radio" /> Non-Document
            </label>
          </div>
          <input {...register("title", { required: true })} placeholder="Parcel Title" className="input input-bordered w-full my-2" />
          {type === 'non-document' && (
            <input {...register("weight", { required: true })} type="number" step="0.1" placeholder="Weight (kg)" className="input input-bordered w-full" />
          )}
        </div>

        {/* Sender Info */}
        <div className="border p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Sender Info</h2>
          <input value={user?.displayName || ''} disabled className="input input-bordered w-full my-2" />
          <input {...register("senderContact", { required: true })} placeholder="Sender Contact" className="input input-bordered w-full my-2" />

          <select {...register("pickupRegion", { required: true })} onChange={(e) => handleRegionChange(e.target.value, true)} className="select select-bordered w-full">
            <option value=''>Select Pickup Region</option>
            {regions.map(region => <option key={region}>{region}</option>)}
          </select>

          <select {...register("pickupServiceCenter", { required: true })} className="select select-bordered w-full my-2">
            <option value=''>Select Pickup Service Center</option>
            {pickupCenters.map(center => <option key={center.district}>{center.district}</option>)}
          </select>

          <input {...register("pickupAddress", { required: true })} placeholder="Pickup Address" className="input input-bordered w-full my-2" />
          <textarea {...register("pickupInstruction", { required: true })} placeholder="Pickup Instruction" className="textarea textarea-bordered w-full"></textarea>
        </div>

        {/* Receiver Info */}
        <div className="border p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Receiver Info</h2>
          <input {...register("receiverName", { required: true })} placeholder="Receiver Name" className="input input-bordered w-full my-2" />
          <input {...register("receiverContact", { required: true })} placeholder="Receiver Contact" className="input input-bordered w-full my-2" />

          <select {...register("deliveryRegion", { required: true })} onChange={(e) => handleRegionChange(e.target.value, false)} className="select select-bordered w-full">
            <option value=''>Select Delivery Region</option>
            {regions.map(region => <option key={region}>{region}</option>)}
          </select>

          <select {...register("deliveryServiceCenter", { required: true })} className="select select-bordered w-full my-2">
            <option value=''>Select Delivery Service Center</option>
            {deliveryCenters.map(center => <option key={center.district}>{center.district}</option>)}
          </select>

          <input {...register("deliveryAddress", { required: true })} placeholder="Delivery Address" className="input input-bordered w-full my-2" />
          <textarea {...register("deliveryInstruction", { required: true })} placeholder="Delivery Instruction" className="textarea textarea-bordered w-full"></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;