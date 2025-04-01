import React from 'react'
import homie from "../assets/Homeabt.svg"


export const Whyab = () => {
  return (
    <>
      <div className="history bg-black text-white w-full pt-28 p-4 bg-gradient-to-b from-[#1c1c1c] via-[#232121] to-[#ded0d0]  ">
       
        <p className='ml-[46%] text-[16px] font-[800] text-yellow-300'>Our History</p>
        <h1 className='ml-[28%] text-[60px] font-semibold w-180  '>Redefining Quality Since </h1>
        <h1 className='ml-[41%] text-[60px] font-semibold'>Day One</h1>
        <p className='ml-[27%] w-167 text-center mt-4 text-[16px] leading-[25px] font-normal'>Established in 2018, Aussie Buckets was born out of necessity to provide hard-working Australians with quality products at a fair price. We offer a comprehensive range of high-quality, 100% purpose-built products, making our heavy equipment the ultimate choice for all Australian operators. Our unique business model focuses on custom fabrication-on-demand, saving our customers thousands in unnecessary cost while providing a purpose-driven attachment, better suited to each customers’ requirements and setting a new standard for efficiency, quality and longevity.
        </p>
       
      
       <img src={homie} alt="" className='w-full grayscale brightness-40  '/>
    
        
       
        
      </div>

      
        
     
    </>
  )
}


