import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Choose = () => {
  return (
    <>
        <div className="choose overflow-hidden h-300">
            <div className="content mx-30 mt-10">
                <h1 className='text-center text-[36px] font-bold'>Why Choose Aussie Buckets?</h1>
                <p className='text-center justify-self-center w-180 text-[16px] mb-5'>At Aussie Buckets, we combine years of industry experience with cutting-edge technology to deliver exceptional results. Here’s what sets us apart:</p>

                <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/6799640b458240f817a8d6ec_02_Team-02.avif" alt="" className='h-50 w-350 object-cover ' />
            </div>
          
        </div>
    </>
  )
}

