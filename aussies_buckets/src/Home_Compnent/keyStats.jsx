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

    // const keyStats =[
    //     {
    //         id: 1,
    //         img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b41d9176655b34d4bdb6ef_Steel%20Grade%20Available.svg",
    //         value: 7450,
    //         suffix: "+",
    //         h1: "Steel Grades Available",
    //         p: "Our products are fully customisable with various steel grades available depending on customer preference and application. Our selection includes HARDOX (Europe), NM (China) and Bisalloy (Australia)"
    //     }
    // ]
    
  return (
    <>
    <div className="card h-220 mx-30 mt-10 max-sm:h-730 max-sm:mx-1 max-sm:overflow-hidden">
        <h1 className='justify-self-center text-[36px] font-bold mb-10'>Key Stats</h1>
        <div className="card1 w-full grid grid-cols-2 gap-5 max-sm:block max-sm:overflow-hidden ">
            {
                keyStats.map((el ,id) => (
                    <div key={id} className='flex border-2 gap-5 p-5 max-sm:h-110 max-sm:w-93 max-sm:ml-5 max-sm:block max-sm:mt-7  max-sm:overflow-hidden' >
                        <img src={el.img} alt="" className='h-30 p-3 ' />
                            <div className='text-[20px]  '>
                                <Countup end={el.value} duration={5}  className='text-[24px] font-bold text-black'/>
                                <span className=' text-red-600 font-bold text-2xl'>{el.suffix}</span>
                                
                                <h1 className='text-[24px] font-bold text-black max-sm:text-[25px]'>{el.h1}</h1>
                                <p className='text-[20px] text-black max-sm:text-[20px]'>{el.p}</p>2q
                            </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}


