import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Video } from './Video';

export const Testimonial = () => {
    const [data, setData] = useState([]);
    const Api = "https://api-4x2d.onrender.com/test_card"

    const getData = async () => {
        try{
            let DataApi = await axios.get(Api)
            let FullData = await DataApi.data;
            setData(FullData)
        }
        catch (err){
   console.log(err);
   
        }

       
    }

    useEffect(() => {
        getData()
    }, [])
  return (

    <>
<Video />
    <div className='grid grid-cols-2  ml-25 mt-20  gap-5'>

 
    {
        data.map((el, id) => (
        <>

             
              <div key={id}  className="border-1 border-solid  pl-7 pr-7 w-160 h-auto rounded-sm tex text-[16px]  ">
               <img src={el.img} alt=""  className='w-35 h-20 ' />
               <p className='mt-0 font-[400]'>{el.para}</p>
               <h1 className='mt-3 mb-5 font-[600]'>{el.hd1}</h1>
              </div>
            
         </>
        ))
    }
       </div>
       
    </>
  )
}
