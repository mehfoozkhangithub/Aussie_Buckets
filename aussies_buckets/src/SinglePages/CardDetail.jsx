import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const CardDetail = () => {
  const { id } = useParams();
  const [cardDetail, setCardDetail] = useState(null);

  const API = `https://api-4x2d.onrender.com/Ausssies/${id}`; // assuming endpoint supports /id

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const { data } = await axios.get(API);
        setCardDetail(data);
      } catch (error) {
        console.error('Error fetching single card:', error);
      }
    };

    fetchDetail();
  }, [id]);

  if (!cardDetail) return <div>Loading...</div>;

  return (
    <>
    <div className="my-20 h-auto mx-30 grid grid-cols-2 mb-40">

      <div className="card-img">
      <img src={cardDetail.img} alt={cardDetail.name} className="w-147 h-152 bg-gray-200 rounded-2xl" />
      </div>

      <div className="card-info">
        <h1 className='text-[38px] font-bold ml-4 '>{cardDetail.name}</h1>
        <div className='rates flex gap-5 absolute top-90'>
          <img src={cardDetail.starpoint} alt="" className=' w-35 h-38' />
          <h1 className='mt-16 text-[16px] font-normal text-gray-500'>{cardDetail.rates}</h1>
          <li className='mt-16 ml-4 text-[16px] font-normal  text-gray-500'>{cardDetail.reviews}</li>
        </div>
        <h1 className='absolute top-115 left-197 text-[16px] '>{cardDetail.size}</h1>
        
        <h2 className='absolute top-122 left-197 text-gray-500'>{cardDetail.price}</h2>


      <div className="card-para absolute top-133 left-197">
        <h1 className='text-[16px]'>Product also Known as</h1>
        <div className="card-bts grid grid-cols-3 gap-1 ">
         <button className='bg-gray-200 mt-2  w-36 h-9 rounded text-[13px]'>Hydraulic Hammer</button>
          <button className='bg-gray-200 mt-2  w-36 h-9 rounded text-[13px]'>Hydraulic Hammer</button>
           <button className='bg-gray-200 mt-2  w-36 h-9 rounded text-[13px]'>Hydraulic Hammer</button>
        </div>

      
        </div>
           <div className="card-para absolute top-158 left-197 text-[14px] w-157 ">
          <p > The {cardDetail.name} comprises four models: SMe, SM, BN, and ALICON, each based on proven rock-breaking technology with features for specific tasks.</p>
          <p className='mt-3'>The ALICON Series, the base model, upgrades the AB Breaker with an optional 2 Stroke Manual Hydraulic Adjustment on select units and an Anti-Blank Firing (ABF) system to boost breaking speed, reduce wear on chisel, t-bolt, and front head, and prolong life.</p>
          <p className='mt-3'>The SMe Series, the top model, has a 3 Level Electronic Automatic Stroke Adjustment System (long, medium, short) tailored to materials. It includes an In-Cab Display for stroke settings, speed, and time, with auto/manual mode options. An optional Smart Connector offers servicing alerts, data visualisation, and tracking. It delivers 26% more productivity than ALICON and suits continuous use in tough conditions.</p>
          <p className='mt-3'>The SM Series features a 2 Level Hydraulic Automatic Stroke Adjustment system (long/short), 18% more impact energy than ALICON, and Auto Greasing, built for use up to 75% per week.</p>
          <p  className='mt-3'>The BN Series provides 5-7% more impact energy than ALICON, with 2 Stroke Manual Hydraulic Adjustment, ABF, and Auto Greasing, designed for extended work on hard materials.</p>

          <p className='mt-3'>All {cardDetail.name} include a 12-month warranty and are ready after chisel insertion and greasing, meeting various breaking requirements.</p>

                <div className="card-bt grid grid-cols-2 gap-3">
         <div className="bt w-78 h-13   bg-yellow-300 mt-3 px-18 py-3 text-[17px]  ">
            <button className="cta  " onClick={() => setSidebar(!sidebar)}>
              Add To Quote
              <div>
               <i class="fa-solid fa-arrow-right ml-5"></i>
               </div>
            </button>
          </div>
            <div className="bt w-79 h-13 border-1 mt-3 px-18 py-3 text-[17px]   font-medium">
            <button className="cta  " onClick={() => setSidebar(!sidebar)}>
              Product Specificaton
              
            </button>
          </div>
        </div>
        </div>

      </div>

     
     
      
   
    </div>



    <div className="about-card bg-gray-200 h-130 my-20 mt-46">
      <div className="about-contain mx-30 grid grid-cols-2 ">
       <div className="iframe mt-20">
<iframe width="630" height="350" src="https://www.youtube.com/embed/WNB7VN7J0uk?si=lPY8A6xFB8Hzoqvb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>

       <div className="iframe-about mt-50 ml-10">
        <h1 className='text-[24px] font-bold'>See It In Action</h1>
        <p className='text-gray-500 mt-3 text-[16px]'>Watch this video to see how our customers put this attachment to the test on tough job sites. This real-world example shows how the right gear can make all the difference. See the results for yourself and discover how Aussie Buckets delivers where it counts.</p>
       </div>

       
      </div>
    </div>

    </>
  );
};

