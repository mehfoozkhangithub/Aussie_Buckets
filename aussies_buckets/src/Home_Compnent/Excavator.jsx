import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Excavator = () => {
    const [excavator , setExcavator] = useState([]);

    const Api = "https://api-4x2d.onrender.com/Excavator-Buckets";

    const fetchingData = async() => {
        try{
            const data = await axios.get(Api);
            const full = await data.data;
            setExcavator(full)
        }
        catch(err){
            console.log(err , "Dont Displayy it");
        }
    }

    useEffect(() => {
        fetchingData();
    },[])


  return (
    <>
        <div className="Card h-150 max-sm:h-400 max-sm:mt-0 max-sm:overflow-hidden ">
            <div className="card1 flex justify-between gap-10 mx-30 max-sm:flex-col max-sm:ml-5 max-sm:w-full ">
                {
                    excavator.map((el , id) =>(
                        <ul key={id} >
                            <li><img src={el.img} alt=""className='h-70 w-120 max-sm:w-90' /></li>
                            <li className='mt-5 text-[24px] font-bold max-sm:mt-4' >{el.h1}</li>
                            <li className='w-100 text-[16px] mt-1 '>{el.p}</li>
                            <li className='border-1 text-[16px] mt-5 p-4 w-60'>{el.button}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    </>
  )
}


