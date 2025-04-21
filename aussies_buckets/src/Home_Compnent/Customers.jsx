import React from 'react'
import { Link } from 'react-router-dom'

export const Customers = () => {

  const [open , setOpen] = React.useState(false)

  const toggleButton = () => {
    setOpen(!open)
  }

  const Cards = [
    {
      id: 1,
      name: "SpiderWorks",
      title: "Spider work",
      desc : "Digging Bucket",
      img : "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/66c6e19758658fcc66eb386c_SpiderWorks.avif",
      video : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxp648Iyb-Y9Da8UlfW4th7oN1AigCULNZw&s",
      stars: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d4ba_Stars.svg",
      youtube : "https://youtu.be/hupPJfat3L0?si=RmszaX0OCuS0QUDu"
    },

    {
      id: 2,
      name: "AI's Mini Excavator & Bobcat Services",
      title: "Mini Excavator",
      desc : "Rock Breaker Vibrating Plate Compactor",
      img : "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/66c6e1a281004c94bd2d76ca_Allan%20Walton.avif",
       video : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxp648Iyb-Y9Da8UlfW4th7oN1AigCULNZw&s",
      stars: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d4ba_Stars.svg",
      youtube : "https://youtu.be/DQZB1qPkCTc?si=94yZSvStTdiGrY9S"
    },

    {
      id: 3,
      name: "Des Harms",
      title: "Des Harms",
      desc : "Hydraulic Grab",
      img : "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/66c6e1ca832658d31dfbb3fb_Des%20Harms.avif",
      video : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxp648Iyb-Y9Da8UlfW4th7oN1AigCULNZw&s",
      stars: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d4ba_Stars.svg",
      youtube : "https://youtu.be/BHeq4MWseRw?si=N3PPU_7VhKuPYvlD"
    }

  ]
  return (
    <>
        <div className="Customers h-200 mx-30 mt-20">
            <h1 className='text-[36px] font-bold text-center'>What Our Customers Say</h1>
            <p className='mb-10 text-[18px] text-center w-202 ml-57'>Discover how our products and services have made a difference for professionals across various industries. Watch real customer stories and see why we’re a trusted choice for quality and reliability</p>

            <div className="Cards flex justify-between gap-8 ">
              {
                Cards.map((el,id) => (
                  <div key={id} className='bg-gray-200 h-120 relative '>

                  <Link to={el.youtube}>
                      <img src={el.img} alt="" onClick={toggleButton} />

                      <div>
                          <img src={el.video} alt="" className='h-12 absolute bottom-79 left-45 rounded-[70px]'/>
                      </div>
                      
                   </Link>


                   <div className='text-center'>
                      <img src={el.stars} alt="" className='justify-self-center mt-5'/>
                      <h1 className='text-[24px] font-bold mt-2'>{el.name}</h1>
                      <h2 className='text-[16px] w-60 justify-self-center mt-1'>{el.desc}</h2>
                   </div>
                  
                  </div>
                ))
              }
            </div>

            {/* ------Modal------- */}

              {
                open && (
                  <div className="parent fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                   
                    <div className="child1">
                      <button onClick={toggleButton}>X</button>
                      <iframe width="560" height="315" src="https://youtu.be/hupPJfat3L0?si=RmszaX0OCuS0QUDu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                  </div>
                ) 
              }             
        </div>
    </>
  ) 
}




