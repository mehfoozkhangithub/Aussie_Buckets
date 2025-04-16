import React from 'react'




export const Choose = () => {

    const Card = [
        {
            id: 1,
            img: "../assets/ILS.png",
            h1: "Industry-Leading Support",
            p: "Our team is here to assist you, from selecting the right attachment to after-sales service. We offer lifelong after-sales support, including technical troubleshooting and general product care."
               
        },

        {
            id: 1,
            img: "../assets/FSAA.png",
            h1: "Industry-Leading Support",
            p: "Our team is here to assist you, from selecting the right attachment to after-sales service. We offer lifelong after-sales support, including technical troubleshooting and general product care."
               
        },

        {
            id: 1,
            img: "../assets/ET.png",
            h1: "Industry-Leading Support",
            p: "Our team is here to assist you, from selecting the right attachment to after-sales service. We offer lifelong after-sales support, including technical troubleshooting and general product care."
               
        },

        {
            id: 1,
            img: "../assets/CS.png",
            h1: "Industry-Leading Support",
            p: "Our team is here to assist you, from selecting the right attachment to after-sales service. We offer lifelong after-sales support, including technical troubleshooting and general product care."
               
        }
    ]


  return (
    <>
        <div className="choose overflow-hidden h-300">
            <div className="content mx-30 mt-10">
                <h1 className='text-center text-[36px] font-bold'>Why Choose Aussie Buckets?</h1>
                <p className='text-center justify-self-center w-180 text-[16px] mb-5'>At Aussie Buckets, we combine years of industry experience with cutting-edge technology to deliver exceptional results. Here’s what sets us apart:</p>

                <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/6799640b458240f817a8d6ec_02_Team-02.avif" alt="" className='h-50 w-350 object-cover ' />
            </div>

        <div className="cards">
            {
                Card.map((el , id) => (
                    <div key={id}>
                        <img src={el.img} alt="" />
                        <h1>{el.h1}</h1>
                        <p>{el.p}</p>
                    </div>
                ))
            }
        </div>
          
        </div>
    </>
  )
}

