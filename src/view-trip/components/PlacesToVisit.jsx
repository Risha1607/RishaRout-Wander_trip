import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  // Ensure itinerary exists and is an object
  if (!trip || !trip.tripData || !trip.tripData.itinerary) {
    return <div>No itinerary data available or data is loading.</div>;
  }

  return (
    <div>
      <h2 className='font-bold text-lg'>Places to Visit</h2>
      <div>
        {Object.keys(trip.tripData.itinerary).map((dayKey, index) => (
          <div className='mt-5'>
            <h2 className='font-medium text-lg'>{dayKey}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {/* Assuming morning, afternoon, evening as parts of the day */}
              {Object.keys(trip.tripData.itinerary[dayKey]).map((timeOfDay, timeIndex) => (
                <div key={timeIndex} className='my-3'>
                  <h2 className='font-medium text-sm text-orange-600'>{timeOfDay}</h2>
                  <PlaceCardItem place={trip.tripData.itinerary[dayKey][timeOfDay]} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
