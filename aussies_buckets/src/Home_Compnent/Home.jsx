import React, { useEffect } from 'react'
import homeBg from "../assets/Home.webp";
import Marquee from 'react-fast-marquee';
import { Excavator } from './Excavator';
import { KeyStats } from './keyStats';
import {Industries} from './Industries';
import { Attachments } from './Attachments';
import { Choose } from './Choose';
import { Customers } from './Customers';
import { Rating } from './Rating';


export const Home = () => {
  useEffect(() => {
    document.title = "Home"
  })
  return (
    
    <>
      {/*---------- Full screen div of img------------- */}
      <div className="first_home h-screen bg-cover bg-center relative " style={{ backgroundImage: ` linear-gradient(#000000b3, #000000b3), url(${homeBg})`, }}>

        {/* ---------------Attachments Div------------------------- */}

        <div className="Attactments text-[30px] text-amber-50 w-full h-90 text-center justify-items-center absolute top-50  ">

          <h1 className='w-100'>THE LARGEST SUPPLIER OF
            <p className='text-amber-300 font-bold text-[50px]'>EXCAVATOR ATTACHMENTS</p>
            IN AUSTRALIA</h1>
          <p className='w-140 text-[16px]'>As the leading supplier of attachments in Australia, we use modern technology and superior materials to ensure that our products are built to Australian standards and exceed your expectations.</p>

          <div className="buttons-part flex justify-evently mt-5 ">

            <div className="bt w-42 h-13 text-black bg-yellow-300 px-5 py-3 text-[17px] rounded-sm  font-medium hover:translate-x-7">
              <button>
                Quick Quate <i class="fa-solid fa-arrow-right mx-1"></i>
              </button>
            </div>

            <div className="button-2 border-2 w-42 h-13 py-3 px-5 text-[17px] ml-5">
              <button>
                Full Range <i class="fa-solid fa-arrow-right mx-1"></i>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* ---------scroll bars------------ */}



      <Marquee autoFill={true}  direction="right" pauseOnClick={true} className="flex ">

        <div className=" flex my-10  mt-10 ">
          <img
            src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d3a9_image%2012.avif"
            alt="logo"
            style={{ marginRight: "25px" }}
          />
          <img
            src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39a_image%208.avif"
            alt="logo"
            style={{ marginRight: "25px" }}
          />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d397_image%209.avif" alt="" className='mr-25 ' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d398_image%2010.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39c_image%2011.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d399_image%2013.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39b_image%2014.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d3a9_image%2012.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39a_image%208.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d397_image%209.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d398_image%2010.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39c_image%2011.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d399_image%2013.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d399_image%2013.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d397_image%209.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d39a_image%208.avif" alt="" className='mr-25 auto-scroll animate-scroll' />

          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d3a9_image%2012.avif" alt="" className='mr-25' />

        </div>
      </Marquee>



      {/*------------------ Expansive Ranges ------------------*/}

      <div className="Expansive-Ranges flex justify-between h-50 mt-10 mx-30">
        <div className="Browses font-bold text-[36px] w-160">
          <h1><span className='text-red-600'>Browse Our Expansive Range</span> Of Excavator Buckets, Grabs And Attachments</h1>
        </div>

        <div className="short_info text-[18px] w-150">
          <p className='mb-5'>Aussie Buckets was born out of necessity to provide hard-working Australians with quality products at a fair and honest price.</p>
          <p>‍
          We offer a comprehensive range of high-quality, 100% purpose-built products, making our heavy equipment the ultimate choice for all Australian operators.</p>
        </div>

      </div>


      {/*-------------- Excavator Cards....----------       */}

      <Excavator/>

      {/*------------ key Stats....-------------- */}

      <KeyStats/>

      {/*----------- Industries-part-------------- */}

      <Industries/>

      {/*----------- <Attachments/>--------------- */}

       <Attachments/> 

      {/* -----------Choose----------------- */}

      <Choose/>

      <hr className=''/>  

      {/* -------------Aussies Customers----------- */}

      <Customers/>

      {/*------------- Ratings and Reviews----------- */}

      <Rating/>



      


    </>
  )
}


