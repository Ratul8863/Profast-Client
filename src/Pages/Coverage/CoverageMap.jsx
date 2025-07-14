import React, { useRef, useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import coverageData from '../../../public/coverageData.json';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Custom icon setup
const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// FlyTo logic as a component
const FlyToDistrict = ({ target }) => {
  const map = useMap();
  useEffect(() => {
    if (target) {
      map.flyTo([target.latitude, target.longitude], 17, {
        duration: 1.5,
      });
    }
  }, [target, map]);

  return null;
};

const CoverageMap = () => {
  const [search, setSearch] = useState('');
  const [targetDistrict, setTargetDistrict] = useState(null);
  const popupRefs = useRef({});

  const handleSearch = (e) => {
    e.preventDefault();
    const match = coverageData.find((d) =>
      d.district.toLowerCase().includes(search.toLowerCase())
    );
    if (match) {
      setTargetDistrict(match);

      setTimeout(() => {
        popupRefs.current[match.district]?.openPopup();
      }, 1500);
    } else {
      alert('District not found!');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        We are available in 64 districts
      </h1>

      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="mb-4 flex justify-center gap-2 flex-wrap"
      >
        <input
          type="text"
          placeholder="Search a district (e.g., Sylhet)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-sm"
        />
        <button type="submit" className="btn btn-primary">
          Go
        </button>
      </form>

      {/* Map Container */}
      <div className="w-full h-[600px] rounded-xl overflow-hidden border">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <FlyToDistrict target={targetDistrict} />

          {/* All Markers */}
          {coverageData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              icon={customIcon}
              ref={(ref) => {
                popupRefs.current[district.district] = ref;
              }}
            >
              <Popup>
                <div className="text-sm">
                  <h2 className="font-bold">{district.district}</h2>
                  <p>
                    <span className="font-semibold">City:</span> {district.city}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    <span className="font-semibold">Covered Areas:</span>{' '}
                    {district.covered_area.join(', ')}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
