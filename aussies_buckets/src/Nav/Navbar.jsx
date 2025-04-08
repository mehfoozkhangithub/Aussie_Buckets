import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../Utils/Logo.svg";
import file from "../Utils/file.png";
import hams from "../Utils/ham.jpg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex sticky top-0 mx-auto items-center justify-between  ">
        <div className="logo">
          <img src={logo} className="my-8 mx-32 h-16 " />
        </div>
        <div className="ul  items-center mr-30 list-none text-[18px] gap-9 font-serif  font-medium  hidden md:flex ">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/">Industries</Link>
          </li>
          <li>
            <Link to="/testi"> Testimonials</Link>
          </li>
          <li>
            <Link to="/why-ab">Why AB? </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
          <div className="bt w-42 h-13  bg-yellow-300 px-5 py-3 text-[17px] rounded-sm  font-medium hover:translate-x-7">
            <button>
              Quick Quate <i class="fa-solid fa-arrow-right mx-1"></i>
            </button>
          </div>

          <img
            src={file}
            alt=""
            className="w-12 h-9 
          "
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
            <Link to="/">Why AB? </Link>
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
    </>
  );
};
