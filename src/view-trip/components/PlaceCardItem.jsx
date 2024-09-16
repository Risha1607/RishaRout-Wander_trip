import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName
    }
    const result = await GetPlaceDetails(data).then(resp => {
      if (resp?.data?.places[0]?.photos[3]?.name) {
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
        setPhotoUrl(PhotoUrl);
      } else {
        // Fallback to a default image or placeholder
        setPhotoUrl('/path-to-placeholder.jpg');
      }
    });
  }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + place.placeName} target='_blank'>
      <div className='border rounded-xl p-3 mt-2 flex gap-5 items-start
      hover:scale-105 transition-all hover:shadow-md cursor-pointer
      min-h-[200px] flex-grow'>
        <img 
          src={photoUrl} 
          className='w-[130px] h-[130px] rounded-xl object-cover' 
          alt={place.placeName} 
        />
        <div className='flex-grow'>
          <h2 className='font-bold text-lg'>{place.placeName}</h2>
          <p className='text-sm text-gray-400'>{place?.["Place Details"]}</p>
          <h2 className='mt-2'>🕙{place?.["Time to travel"]}</h2>
          <Button size="sm"><FaMapLocationDot /></Button>
        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem;
