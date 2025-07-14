import React from 'react';
import CoverageMap from './CoverageMap';


const Coverage = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">We are available in 64 districts</h1>
      {/* Search bar will come here */}
      <CoverageMap />
    </div>
  );
};

export default Coverage;
