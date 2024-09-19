import React from 'react';
import PlaceCardItem from './PlaceCardItem';


function PlacesToVisit({ trip }) {
  // Ensure itinerary exists and is an object
  if (!trip || !trip.tripData || !trip.tripData.itinerary) {
    return <div>No itinerary data available or data is loading.</div>;
  }

  // Define the preferred order for the time of day
  const timeOfDayOrder = ['morning', 'afternoon', 'evening'];

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Sort the days in a predictable order (assuming days are named day1, day2, day3, etc.)
  const sortedDays = Object.keys(trip.tripData.itinerary).sort((a, b) => {
    const dayA = parseInt(a.replace('day', '')); // Extract the number from "day1", "day2", etc.
    const dayB = parseInt(b.replace('day', ''));
    return dayA - dayB; // Sort numerically
  });

  return (
    <div>
      <h2 className='font-bold text-lg'>Places to Visit</h2>
      <div>
        {sortedDays.map((dayKey, index) => (
          <div className='mt-5' key={index}>
            {/* Replace "day" with "Day " and capitalize */}
            <h2 className='font-medium text-lg'>{`Day ${dayKey.replace('day', '')}`}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {/* Loop through timeOfDayOrder to ensure morning, afternoon, and evening display in that order */}
              {timeOfDayOrder.map((timeOfDay) => (
                trip.tripData.itinerary[dayKey][timeOfDay] && (
                  <div key={timeOfDay} className='my-3'>
                    {/* Capitalize the first letter of the timeOfDay */}
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
