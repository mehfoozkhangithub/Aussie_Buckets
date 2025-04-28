import React from 'react'
import abouts from '../Utils/about.webp'
  import { IndustryCard } from './IndustryCard'

export const Industries = () => {
  return (
   <>
   <div className="head mt-10 w-full bg-gray-100 ">
    <div className="about flex">
        <div className="about-us w-170 mx-32 my-20">
            <h1 className='text-[38px] font-bold'>Industries</h1>
            <p className='text-[16px] mb-3'>Explore Aussie Buckets' extensive range of specialised excavator attachments designed for all industries. Our comprehensive range caters to Agriculture & Forestry, Bulk Material Handling, Construction & Building, Demolition, Landscaping, Mining, Recycling, Utilities, Civil and many more.</p>
            <p className='mb-4'>‍Each attachment is meticulously engineered and rigorously tested to ensure superior performance, durability, and efficiency in their respective applications. From heavy-duty buckets and hydraulic grabs to rock breakers and augers, our products are built to handle the toughest tasks with minimal downtime</p>
            <h2>All attachments come standard with our industry-leading 5-year warranty.

            </h2>
        </div>
        <div className="about-img">
            <img src={abouts} alt="" className='w-140 h-85 rounded-sm my-16 mr-55' />
        </div>
     
    </div>
   </div>

 

   <IndustryCard />
   </>
  )
}
