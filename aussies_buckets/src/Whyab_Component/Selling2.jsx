import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Selling2 = () => {

    const [sell, setSell] = useState([]);

    const Api = "https://api-4x2d.onrender.com/Selling-point-2";

    const fetchData = async () => {
        try {
            const data = await axios.get(Api);
            const fullData = await data.data;
            setSell(fullData);
        }
        catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className="selling2 flex justify-evently gap-5 mx-[6%] mt-5 ">
                {
                    sell.map((el) => (
                        <div className='w-200 border-2 p-8 bg-amber-50'>
                            <img src={el.img} alt="" className='h-20' />
                            <h1 className='text-[18px] font-bold mt-5'>{el.name}</h1>
                            <p className='text-[18px] mt-5'>{el.para2}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Selling2
