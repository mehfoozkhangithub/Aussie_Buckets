import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CardDetail = () => {
  const { cardId } = useParams();
  const [cardDetail, setCardDetail] = useState(null);

  const API = `https://api-4x2d.onrender.com/Ausssies/${cardId}`; // assuming endpoint supports /id

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
  }, [cardId]);

  if (!cardDetail) return <div>Loading...</div>;

  return (
    <div className="mx-30 my-20 bg w-160 ">
      <img src={cardDetail.img} alt={cardDetail.name} className="w-140 h-137 bg-gray-200 rounded-2xl" />
   
    </div>
  );
};

