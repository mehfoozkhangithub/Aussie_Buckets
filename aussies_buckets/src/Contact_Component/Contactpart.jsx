import React from 'react'

export const Contactpart = () => {
  return (
    <>
      <div className="Information flex justify-between mx-30 mt-20 mb-20 ">

        <div className="email">
          <img src="https://t3.ftcdn.net/jpg/02/38/96/64/360_F_238966486_A5wEWiRNtuUm85Qxj5BM12hCDNrSS7yS.jpg" alt="" className='h-25'/>
          <h1 className='text-[32px] font-bold'>Email</h1>
          <p>Sales</p>
          <h2 className='text-[16px] font-bold mb-5'>sales@aussiebuckets.com.au</h2>

          <p>Shipping</p>
          <h2 className='text-[16px] font-bold mb-5'>shipping@aussiebuckets.com.au</h2>

          <p>Accounts</p>
          <h2 className='text-[16px] font-bold mb-5'>admin@aussiebuckets.com.au</h2>

          <p>Marketing</p>
          <h2 className='text-[16px] font-bold mb-5'>marketing@aussiebuckets.com.au</h2>
        </div>

        {/*----------- phone part-------------- */}

        <div className="phone">
          <img src="https://www.shutterstock.com/image-vector/phone-icon-trendy-flat-style-600nw-1189157305.jpg" alt=""  className='h-25' />
          <h1 className='text-[32px] font-bold'>Phone</h1>
          <p>Sales & Accounts</p>
          <h2 className='text-[16px] font-bold mb-5'>(03) 9917 8598</h2>

          <p>Shipping</p>
          <h2 className='text-[16px] font-bold mb-5'>(03) 9917 8619</h2>

          <p>Marketing</p>
          <h2 className='text-[16px] font-bold mb-5'>(03) 9917 8619</h2>
        </div>


        {/*-------------- location part ---------------- */}

        <div className="location">
          <img src="https://img.freepik.com/premium-vector/location-icon-vector_1200571-1227.jpg?semt=ais_country_boost&w=740" alt="" className='h-25' />
          <h1 className='text-[32px] font-bold'>Office</h1>
          <h2 className='text-[16px] font-bold '>OPENING HOURS</h2>
          <p className='mb-5'> Mon - Fri: 8am - 5pm AEDT</p>

          <h2 className='text-[16px] font-bold '>HEAD OFFICE</h2>
          <p className='mb-5 w-90'>By Appointment Only

            LEVEL 15/607 BOURKE ST,
            MELBOURNE CBD VIC 3000</p>

            <h2 className='text-[16px] font-bold'>DISTRIBUTION WAREHOUSE</h2>
            <p className='w-50'>8/6 PETERPAUL WAY,
            TRUGANINA VIC 3029</p>


        </div>

      </div>

    </>
  )
}


