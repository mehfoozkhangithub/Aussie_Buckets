import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


export const Partners3 = () => {

    const [profile, setProfile] = useState([]);

    const Api2 = "https://api-4x2d.onrender.com/partner-profile-2";

    const fetchingData = async () => {
        try {
            const getApi = await axios.get(Api2)
            const fullApi = await getApi.data
            setProfile(fullApi)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])


    return (
        <>
            <div className="partner-profile ">
                {
                    profile.map((el, id) => (
                        <div key={id} className="profile_one grid grid-cols-3 content-center w-150  mt-10">
                            <img src={el.img} alt="" className='h-30 rounded-[120px] ' />

                            <div className='mt-4'>
                                <h1 className=''>{el.name}</h1>
                                <p>{el.post}</p>
                                <p>{el.number}</p>
                                <p>{el.email}</p>
                                
                            </div>

                          <hr className='w-1' />

                            <div className='mt-5'>
                                <hr className='w-150'/>
                                <h1 className='mt-5'>{el.team}</h1>
                                <p>{el.no2}</p>
                                <p>{el.em2}</p>
                            </div>


                        </div>
                    ))
                }
            </div>
        </>
    )
}

