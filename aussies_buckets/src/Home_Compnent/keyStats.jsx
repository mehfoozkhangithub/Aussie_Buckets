import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Countup from 'react-countup'

export const KeyStats = () => {
    const [keyStats , setKeyStats] = useState([]);

    const Api ="https://api-4x2d.onrender.com/key-Stats";
    

    const fetchData = async() => {
       try{
        const data = await axios.get(Api);
        const full = await data.data;
        setKeyStats(full);
        console.log(full)
       }
       catch(err){
        console.log(err , "dont display the card");
       }
    }

    useEffect(() => {
        fetchData();
    },[])
    
  return (
    <>
    <div className="card h-220 mx-30 mt-10 ">
        <h1 className='justify-self-center text-[36px] font-bold mb-10'>Key Stats</h1>
        <div className="card1 h- w-full grid grid-cols-2 gap-5">
            {
                keyStats.map((el ,id) => (
                    <div key={id} className='flex border-2 gap-5 p-5' >
                        <img src={el.img} alt="" className='h-30 p-3 ' />
                            <div className='text-[20px]    '>
                                <Countup end={el.value} duration={5} separation=","  className='text-[24px] font-bold text-black'/>
                                <span className=' text-red-600 font-bold text-2xl'>{el.suffix}</span>
                                
                                <h1 className='text-[24px] font-bold text-black'>{el.h1}</h1>
                                <p className='text-[20px] text-black '>{el.p}</p>
                            </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}


