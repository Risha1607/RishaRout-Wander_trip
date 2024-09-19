import React from 'react';
import HotelCardItem from './HotelCardItem';


function Hotels({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>
        Hotel Recommendations
      </h2>
      {/* Adjust the grid layout for various screen sizes */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <HotelCardItem hotel={hotel} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
