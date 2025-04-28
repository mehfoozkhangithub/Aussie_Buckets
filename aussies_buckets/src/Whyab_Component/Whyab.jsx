import React from 'react'
import homie from "../assets/Homeabt.svg"
import MBI from "../assets/MBI.png"
import Daemo from "../assets/Daemo.png"


export const Whyab = () => {
  return (
    <>
      <div className="history bg-black text-white mt-10 w-full pt-28  bg-gradient-to-b from-[#090808] via-[#232121] to-[#ded0d0]  ">

        <div className="part-1">
          <p className='ml-[46%] text-[16px] font-[800] text-yellow-300'>Our History</p>
          <h1 className='ml-[28%] text-[60px] font-semibold w-180  '>Redefining Quality Since </h1>
          <h1 className='ml-[41%] text-[60px] font-semibold'>Day One</h1>
          <p className='ml-[27%] w-167 text-center mt-4 text-[16px] leading-[25px] font-normal'>Established in 2018, Aussie Buckets was born out of necessity to provide hard-working Australians with quality products at a fair price. We offer a comprehensive range of high-quality, 100% purpose-built products, making our heavy equipment the ultimate choice for all Australian operators. Our unique business model focuses on custom fabrication-on-demand, saving our customers thousands in unnecessary cost while providing a purpose-driven attachment, better suited to each customers’ requirements and setting a new standard for efficiency, quality and longevity.
          </p>
        </div>


        <div className="part-2 !w-full ">
        <img src={homie} alt="" className='!w-full grayscale brightness-100 h-[700px]' />
        </div>
       
    </div>


      <div className="partners bg-[rgb(198,196,196)] h-200 w-full">

      {/*------------- Autherised Dealers part------------  */}

       <div className="classname pt-20 ">

        <div className="Authorized h-80 w-320 ml-30 text-center pt-10  relative bg-white ">
            <h1 className='text-[36px] font-bold pb-3'>Authorized Dealers</h1>
            <p className='text-[18px]'>We proudly partner with industry-leading brands to deliver the best gear on the market.</p>


            <div className="img1 absolute left-120 bottom-18">
            <img src={MBI} alt="" className='h-10' absolute  />
            </div>


            <div className="img2 absolute right-120 bottom-15">
            <img src={Daemo} alt="" className='h-12' />
            </div>

          </div>
        </div>

      {/*----------------- Meet the Team Members--------- */}

        <div className="Team-Members pt-20 text-center">
          <h1 className='text-[36px] font-bold ml-'> Meet Our Teams </h1>
          <p className='w-200 ml-[23%] text-[18px] pt-4 '>At Aussies Buckets , Our Experienced and dedicated team is committed to delievering top-quality exvavator attachments and exceptional customer services</p>

          <div className="partners-card">

             <div className="card1"> 
                
            </div>
            <div className="card2"></div>
            <div className="card3"></div>
          </div>

        </div>


      </div>




    </>
  )
}


