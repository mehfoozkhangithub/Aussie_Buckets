import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Selling = () => {

    const [selling , setSelling] = useState([])

    const Api = "https://api-4x2d.onrender.com/Selling-points";

    const fetchingdata = async() => {
        try{
            const data = await axios.get(Api);
            const fullData = await data.data;
            setSelling(fullData);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchingdata();
    },[])


  return (
    <>
      <div className='h-280   '>
        <h1 className='text-center mt-10 text-[36px] font-bold'>Our Unique Selling Points</h1>
        <p className='text-center w-190 ml-[25%] text-[18px] mt-5'>At Aussie Buckets, we pride ourselves on delivering high-quality excavator attachments tailored to meet the diverse needs of our customers, ensuring top-notch performance and durability in every product.</p>

    <div className="Selling_cards grid grid-cols-3 gap-5 px-24 pt-10">
        {
            selling.map((el)=> (
                <div className='w-110 border-2 p-10 bg-amber-50'>
                    <img src={el.img} alt="" className='h-20'/>
                    <h1 className='text-[18px] font-bold mt-5'>{el.name}</h1>
                    <p className='text-[18px] mt-5'>{el.para2}</p>
                </div>
            ))
        }
    </div>

      </div>
    </>
  )
}


