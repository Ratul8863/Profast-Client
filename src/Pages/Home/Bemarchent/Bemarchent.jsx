import React from 'react'
import location from "../../../assets/location-merchant.png"


function Bemarchent() {
  return (
    <div data-aos="zoom-in-up"  className="  p-20 rounded-4xl bg-primary bg-no-repeat bg-[url(assets/be-a-merchant-bg.png)]" >
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={location}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn bg-[#CAEB66] rounded-full text-black">Become a Merchant</button>
      <button className="btn btn-outline btn-secondary   rounded-full ms-4">Earn with Profast Courier</button>
    </div>
  </div>
</div>
  )
}

export default Bemarchent