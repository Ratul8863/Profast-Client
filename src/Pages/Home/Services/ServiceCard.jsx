import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-[48%] lg:w-[31%]">
      <div className="text-4xl text-primary mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
