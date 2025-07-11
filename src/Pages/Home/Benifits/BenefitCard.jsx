import React from 'react';

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className="card card-side bg-white shadow-md md:flex-row flex-col items-center overflow-hidden">
      {/* Left: Image */}
      <figure className=" p-4 md:p-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-full object-contain"
        />
      </figure>

      {/* Vertical Divider (only on desktop) */}
      <div className="hidden md:block w-px bg-base-200 h-36 mx-4" />

      {/* Right: Content */}
      <div className="card-body md:flex md:justify-center md:items-center  p-6">
        <div>
          <h3 className="card-title text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
