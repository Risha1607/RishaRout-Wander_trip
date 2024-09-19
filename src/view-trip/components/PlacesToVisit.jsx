import React from 'react';
import PlaceCardItem from './PlaceCardItem';


function PlacesToVisit({ trip }) {
 
  if (!trip || !trip.tripData || !trip.tripData.itinerary) {
    return <div>No itinerary data available or data is loading.</div>;
  }


  const timeOfDayOrder = ['morning', 'afternoon', 'evening'];

 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 
  const sortedDays = Object.keys(trip.tripData.itinerary).sort((a, b) => {
    const dayA = parseInt(a.replace('day', '')); 
    const dayB = parseInt(b.replace('day', ''));
    return dayA - dayB; 
  });

  return (
    <div>
      <h2 className='font-bold text-lg'>Places to Visit</h2>
      <div>
        {sortedDays.map((dayKey, index) => (
          <div className='mt-5' key={index}>
         
            <h2 className='font-medium text-lg'>{`Day ${dayKey.replace('day', '')}`}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
            
              {timeOfDayOrder.map((timeOfDay) => (
                trip.tripData.itinerary[dayKey][timeOfDay] && (
                  <div key={timeOfDay} className='my-3'>
                 
                    <h2 className='font-medium text-sm text-orange-600'>{capitalizeFirstLetter(timeOfDay)}</h2>
                    <PlaceCardItem place={trip.tripData.itinerary[dayKey][timeOfDay]} />
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
