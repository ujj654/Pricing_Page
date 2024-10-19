import React from 'react';

const Toggle = () => {
  return (
    <div className='flex justify-center'>
      <div className="inline-flex bg-blue-100 mb-8 rounded-md p-1 text-lg font-medium">
        <button className="bg-white text-gray-900 px-4 py-2 rounded-l-md">Monthly</button>
        <button className="bg-blue-100 text-gray-900 px-4 py-2 rounded-r-md">Annual</button>
      </div>
    </div>
  );
};


export default Toggle;
