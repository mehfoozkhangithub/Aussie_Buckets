import React from 'react'
import { Link } from 'react-router-dom'

import logo  from '../Utils/Logo.svg'
import file from '../Utils/file.png'
import hams from '../Utils/ham.jpg'


export const Navbar = () => {
  return (
    <>
    <header className='flex sticky top-0 mx-auto items-center justify-between  '>
        <div className="logo">
            <img src={logo} className='my-8 mx-32 h-16'  />
        </div>
        <div className="ul  items-center mr-30 list-none text-[18px] gap-9 font-serif  font-medium  hidden md:flex " >
          <li>
           <Link to="/">Product</Link>
          </li>
          <li>
           <Link to="/" >Industries</Link>
          </li>
          <li>
           <Link to="/" > Testimonials</Link>
          </li>
          <li>
           <Link to="/">Why AB? </Link>
          </li>
          <li>
           <Link to="/">Contact </Link>
          </li>
    <div className="bt w-42 h-13  bg-yellow-300 px-5 py-3 text-[17px] rounded-sm  font-medium hover:translate-x-7">
    <button >Quick Quate <i class="fa-solid fa-arrow-right mx-1" ></i></button>
     </div>
          
          <img src={file} alt="" className='w-12 h-9 ' />
        </div>
        
        
          <img src={hams} alt="" className='w-10  md:hidden block text-5xl cursor-pointer' />
        

   
         
      
    </header>
    <div className="boundries w-full h-1  bg-yellow-300">
      
    </div>
    </>
  )
}
