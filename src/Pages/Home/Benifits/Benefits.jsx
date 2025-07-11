import React from 'react';
import BenefitCard from './BenefitCard';

import img1 from '../../../assets/live-tracking.png';
import img2 from '../../../assets/safe-delivery.png';
import img3 from '../../../assets/safe-delivery.png';

const benefits = [
  {
    id: 1,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
    image: img1,
  },
  {
    id: 2,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    image: img2,
  },
  {
    id: 3,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
    image: img3,
  },
];

const Benefits = () => {
  return (
    <div className="bg-base-100 py-12  ">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
      </div>

      <div className="space-y-6 ">
        {benefits.map(({ id, image, title, description }) => (
          <BenefitCard
            key={id}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
