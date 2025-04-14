import React from 'react'

export const Industries = () => {
  return (
    <>
        <div className="industries flex justify-around mx-20 mt-20 mb-10">
            <div className="info w-150 mt-8">
                <h1 className='text-[32px] mb-5 font-bold'>Expertise Across Every Industry</h1>
                <p className='text-[18px]'>We pride ourselves on bringing attachments to market built from the ground up with purpose and application in mind. We want to provide our community with the best solutions to solve the most challenging applications, and put attachment efficiency and longevity at the forefront of each and every design.</p>
                <button className='text-[16px] border-1 p-4 mt-5 hover:bg-black hover:text-white transition duration-300'>All Industries</button>
            </div>

            <div className="Excava-buttons grid grid-cols-2 text-[16px] gap-3 ">
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>LandScape</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Demolition</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Construction & Building</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Recycling</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Agriculture & Forestry</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Qurries & Mines</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Tunnelling</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Utilities</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Trenching</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Road Works</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Ports and Underwater</button>
                <button className=' p-3 w-70 bg-gray-200 cursor-pointer'>Bulk Material Handling</button>
            </div>
        </div>
    </>
  )
}


