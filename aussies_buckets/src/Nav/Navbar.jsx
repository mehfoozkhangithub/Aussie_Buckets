import React from 'react'
import { Link } from 'react-router-dom'

import logo  from '../Utils/Logo.svg'
import harm from '../Utils/ham.webp'


export const Navbar = () => {
  return (
    <>
    <header className='flex sticky top-0 mx-auto items-center justify-between '>
        <div className="logo">
            <img src={logo} className='my-10 mx-30'  />
        </div>
        <div className="ul flex items-center mr-25  list-none text-[19px] gap-8" >
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
    <div className="bt w-38  bg-yellow-300 p-3 text-[19px] rounded-sm">
    <button>Quick Quate <i class="fa-solid fa-arrow-right "></i></button>
     </div>
          
          <img src={harm} alt="" className='w-12' />
        </div>

   
         
      
    </header>
    <div className="boundries">
      
    </div>
    </>
  )
}
