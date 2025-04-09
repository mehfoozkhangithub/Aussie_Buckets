import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Utils/Logo.svg";
import file from "../Utils/file.png";
import hams from "../Utils/ham.jpg";
import cance from "../Utils/cancel.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <header className="flex  top-0 mx-auto items-center justify-between  ">
        <div className="logo">
          <img src={logo} className="my-8 mx-32 h-16 " />
        </div>
        <div className="ul  items-center mr-30 list-none text-[18px] gap-9 font-serif  font-medium  hidden md:flex ">
          <li>
            <Link to="#">Product</Link>
          </li>
          <li>
            <Link to="#">Industries</Link>
          </li>
          <li>
            <Link to="/testi"> Testimonials</Link>
          </li>
          <li>
            <Link to="/why-ab">Why AB? </Link>
          </li>
          <li>
            <Link to="#">Contact </Link>
          </li>
          <div className="bt w-42 h-13  bg-yellow-300 px-5 py-3 text-[17px] rounded-sm  font-medium hover:translate-x-2">
            <button>
              Quick Quote <i class="fa-solid fa-arrow-right mx-1"></i>
            </button>
          </div>

          <img

            src={file}
            alt=""
            className="w-12 h-9  
          "
          onClick={() => setSidebar(!sidebar) }
          />
        </div>

        <img
          src={hams}
          alt=""
          className="w-12  md:hidden block text-5xl cursor-pointer mr-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`absolute xl:hidden top-29 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100 " : "opacity-0" 
          }`}
          style={{ transition: "transform 0.3s ease, opacity-0" }}
        >
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/">Product</Link>
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/">Industries</Link>
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/testi"> Testimonials</Link>
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/why-ab">Why AB? </Link>
          </li>
          <li className="list-none w-full text-left p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/">Contact </Link>
          </li>
          <div className='w-130 h-13  text-center bg-yellow-300 px-5 py-3 text-[17px] rounded-sm  font-medium "'>
            Quick Quate
            <button>
              {" "}
              <i class="fa-solid fa-arrow-right mx-1"></i>
            </button>
          </div>
        </div>
      </header>
      <div className="boundries w-full h-1  bg-yellow-300"></div>

      {/* ....                   sidebar................................................... */}
      
      <div   className={`absolute   z-40  backdrop-blur-xs  right-0 w-full  flex flex-col items-end gap-6 font-semibold text-lg transform transition-transform ${
            sidebar ? "opacity-100 " : "opacity-0 "
          }`}
         >
  <div className="w-170  bg-white  min-h-screen border-2 ">
   
    <div>
      <img src={cance} alt="" className="w-16 absolute top-3 right-2"  onClick={()=> setSidebar(false)}/>
    </div>
    <h1 className="text-center text-[48px] font-semibold mt-7">Quick Start</h1>


 <form action="" className="mt-10"   >
  <div className="input-head grid grid-cols-2 gap-5 text-[16px] justify-items-center">
  <div>
  <input type="text" name="text" placeholder="First name" className="border-1 p-3 capitalize w-73 ml-9" />
  </div>
  <div>
  <input type="text" name="text" placeholder="First name" className="border-1 p-3 capitalize w-73 mr-8" />
  </div>
  <div>
  <input type="text" name="text" placeholder="First name" className="border-1 p-3 capitalize  w-73 ml-9" />
  </div>
  <div>
  <input type="text" name="text" placeholder="First name" className="border-1 p-3 capitalize w-73 mr-8" />
  </div>
 </div>

  <textarea name="message" placeholder="Question or custom requirements" className="border-1 w-151 mt-7 mx-9 p-4"></textarea>

  <div className=" add-item mx-10 my-3">
    <h1 className="my-3 text-red-600 text-[16px]">Please select at least one product to proceed</h1>
<button className="w-151 h-12 bg-gray-200 border-1 text-[16px] font-bold rounded-sm">Add a product</button>
  </div>

  <div className="sumbit">
  <input type="submit" value="Submit" className="w-151 h-12 mx-10 my-10 text-[16px] bg-amber-300 rounded-sm" />
  </div>
 
 </form>

 <h2 className="mx-10 text-[16px] text-gray-400">Add 3 more to get 5% discount </h2>
  </div>
  </div>
    </>
    
  );
};