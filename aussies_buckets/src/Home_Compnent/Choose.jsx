import React from 'react'
import ILS from "../assets/ILS.png"
import FSAA from "../assets/FSAA.png"
import ET from "../assets/ET.png"  
import CS from "../assets/CS.png"


export const Choose = () => {

    const Card = [
        {
            id: 1,
            img: ILS,
            h1: "Industry-Leading Support",
            p: "Our team is here to assist you, from selecting the right attachment to after-sales service. We offer lifelong after-sales support, including technical troubleshooting and general product care."
               
        },

        {
            id: 1,
            img: FSAA,
            h1: "Fast Shipping Across Australia",
            p: "Need your equipment quickly? We ensure fast and reliable delivery so you can keep your projects on schedule"
               
        },

        {
            id: 1,
            img: ET,
            h1: "Experience You Can Trust",
            p: "With years of expertise in construction and earthmoving equipment, we understand what contractors and operators need to succeed."
               
        },

        {
            id: 1,
            img: CS,
            h1: "Customisable Solutions",
            p: "We design and manufacture attachments to fit a wide range of excavator models, ensuring seamless integration and performance"
               
        }
    ]


  return (
    <>
        <div className="choose overflow-hidden h-280 max-sm:mx-3 max-sm:h-400 ">
            <div className="content mx-30 mt-10 max-sm:mx-3">
                <h1 className='text-center text-[36px] font-bold max-sm:text-[30px]'>Why Choose Aussie Buckets?</h1>
                <p className='text-center justify-self-center w-180 text-[16px] mb-5 max-sm:w-90 max-sm:text-[18px]'>At Aussie Buckets, we combine years of industry experience with cutting-edge technology to deliver exceptional results. Here’s what sets us apart:</p>

                <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/6799640b458240f817a8d6ec_02_Team-02.avif" alt="" className='h-50 w-350 object-cover mt-10 max-sm:mx-2 max-sm:w-95 max-sm:h-60' />
            </div>

        <div className="cards grid grid-cols-2 mx-30 text-center gap-10 mt-20 max-sm:block max-sm:mx-0 max-sm:gap-5 max-sm:mt-10">
            {
                Card.map((el , id) => (
                    <div key={id}>
                        <img src={el.img} alt="" className='justify-self-center mt-3'/>
                        <h1 className='text-[20px] font-bold mt-3 max-sm:w-100 max-sm:mr-20 max-sm:mx-0'>{el.h1}</h1>
                        <p className='text-[16px] mt-3 max-sm:w-92 max-sm:mx-3'>{el.p}</p>
                    </div>
                ))
            }
        </div>

        <div className="button flex justify-center mt-10">
        <button className='p-5 mt-10 border-2 hover:bg-black hover:text-amber-200 transition-all duration-300 ease-in-out'>Learn More</button>
        </div>
          
        </div>
    </>
  )
}

