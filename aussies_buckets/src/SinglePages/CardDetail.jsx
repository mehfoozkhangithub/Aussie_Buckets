import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CardDetail = () => {
  const { id } = useParams();
  const [cardDetail, setCardDetail] = useState(null);

  const API = `https://api-4x2d.onrender.com/Ausssies/${id}`; // assuming endpoint supports /id

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios.get(API);
        setCardDetail(data);
      } catch (error) {
        console.error('Error fetching single card:', error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!cardDetail) return <div>Loading...</div>;

  return (
    <div className="my-20 mx-30 grid grid-cols-2">
      <div className="card-img">
      <img src={cardDetail.img} alt={cardDetail.name} className="w-135 h-137 bg-gray-200 rounded-2xl" />
      </div>

      <div className="card-info">
        <h1 className='text-[38px] font-bold mr-50'>{cardDetail.name}</h1>
      </div>
      
   
    </div>
  );
};

