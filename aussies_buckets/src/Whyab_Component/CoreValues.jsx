import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'


export const CoreValues = () => {
    const [core , setCore] = useState([])

    const Api = "https://api-4x2d.onrender.com/core-values";

    const fetchingData = async() => {
        try{
            const data = await axios.get(Api)
            const fullData = await data.data
            setCore(fullData);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchingData()
    },[])

  return (
    <>
        <div className="Corevalues h-200 bg-amber-50 px-24 py-18">
            <h1 className='text-center text-[38px] font-bold mb-5'>Our Core Values</h1>

            <div className="cord_card  grid grid-cols-3 gap-10">
                {
                    core.map((el , id) => (
                        <div key={id} className=' w-105 p-8 bg-[rgb(221,212,212)] '>
                            <img src={el.img} alt="" className='h-15'/>
                            <h1 className='font-bold text-[24px] mt-3 '>{el.name}</h1>
                            <p className='text-[16px] mt-3'>{el.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}


