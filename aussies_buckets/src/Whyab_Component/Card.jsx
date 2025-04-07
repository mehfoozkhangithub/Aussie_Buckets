import React, { useEffect, useState } from 'react'
import axios from "axios"
import linkedin from '../assets/Linkedin.png'


const Card = () => {

  const [partners, setPartners] = useState([]);
  const Api = "https://api-4x2d.onrender.com/Partners-Cards-1"

  const fetchData = async () => {
    try{
      let Data = await axios.get(Api)
      let FullData = await Data.data;
      setPartners(FullData)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[]) 


  return (
    <>
      <div className="Team-Members pt-20 text-center mb-15">
        <h1 className='text-[36px] font-bold ml-'> Meet Our Teams </h1>
        <p className='w-200 ml-[23%] text-[18px] pt-4 '>At Aussies Buckets , Our Experienced and dedicated team is committed to delievering top-quality exvavator attachments and exceptional customer services</p>
      </div>

      <div className='Cards '>

          {partners.length > 0 ? (

            <ul className=' grid grid-cols-3 text-center w-340 gap-5 ml-25 '>
              {partners.map((el, id) => (
                <li key={id} className='bg-amber-50 w-105 h-135 text-[16px] '>

                  <img src={el.img} alt="" className='h-100 w-105' />
                  <h1 className='mt-6 font-bold'>{el.name}</h1>
                  <p>{el.post}</p>
                  <img src={linkedin} alt="" className='h-10 ml-43'/>
                
                </li>
              ))}
            </ul>

          ) : (

            <h2>No Partners Added</h2>

          )}
    

      </div>
    </>
  )
}

export default Card
