import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Partners3 } from './partners3';



export const Partners2 = () => {

  const [data , setData] = useState([])
  const Api = "https://api-4x2d.onrender.com/partner-profile";

  const getData = async () => {
    try{
      const DataApi = await axios.get(Api)
      const FullData = await DataApi.data
      setData(FullData);
    } 
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  },[]);


  return (
    <div className='h-200 mt-10 '>
       <div className="key-contact mt-10 mx-23 px-10 pt-10 bg-amber-50 ">
          <h1 className='text-[36px] font-bold'>Key Contacts</h1>
          <p className='text-[18px] w-170 mt-5'>We're here for you, standing firm with unshakable support and expertise to drive your success, no matter the challenge.</p>

          <div className="flexibitly flex justify-around">
 
          <div className="partners-1 mt-8 mb-15">
              {
                data.map((el ,id) => (
                  <div key={id} className='flex justify-around w-130 mt-10 align-center  mt-10 '>
                    <img src={el.img} alt="" className='h-50 rounded-[120px]' />

                    <div className='mt-14'>
                      <h1 className='text-[18px] font-bold'>{el.name}</h1>
                      <h1>{el.post}</h1>
                      <p>{el.number}</p>
                      <p>{el.email}</p>
        
                    </div>
                  </div>

                  
                ))
              }
          </div>

          <div className="partner-3">
              <Partners3/>
          </div>

      </div>

        
    </div>
  </div>
  )
}


