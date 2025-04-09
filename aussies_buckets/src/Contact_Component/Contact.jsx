import React from 'react'

export const Contact = () => {
  return (
    <>
      <div className="Contact  ">
        <div className="info border-2  mx-20 bg-[rgb(198,196,196)]">

        {/*------------- first info---------------- */}
          <div className="Phone flex justify-evently mt-10 ">

            <div className="img">
              <img src="https://www.shutterstock.com/image-vector/phone-icon-trendy-flat-style-600nw-1189157305.jpg" alt="" className='h-15    rounded-[100%]' />
            </div>

            <div className="phone-info ml-5">

              <div className='mt-5'>
                <h1 className='mb-5 font-bold'>Phone</h1>
                <p>Sales & Accounts</p>
                <p className='font-bold '>(03) 9917 8598</p>
              </div>

            </div>
          </div>


        {/*------------ second info------------- */}
          <div className="Email flex  ">

            <div className="img">
              <img src="https://t3.ftcdn.net/jpg/02/38/96/64/360_F_238966486_A5wEWiRNtuUm85Qxj5BM12hCDNrSS7yS.jpg" alt="" className='h-15 mt-5   rounded-[100%]' />
            </div>

            <div className="phone-info ml-5">

              <div className='mt-10'>
                <h1 className='mb-5 font-bold'>Email</h1>
                <p>Reception</p>
                <p className='font-bold '>admin@aussiebuckets.com.au</p>
              </div>

            </div>
          </div>


          {/*------------ third info------------- */}
          <div className="Location flex mt-5 justify-evently">

            <div className="img">
              <img src="https://img.freepik.com/premium-vector/location-icon-vector_1200571-1227.jpg?semt=ais_country_boost&w=740" alt="" className='h-15    rounded-[100%]' />
            </div>

            <div className="phone-info ml-5">

              <div className='mt-5'>
                <h1 className='mb-5 font-bold'>Location</h1>
                <p>Head Office</p>
                <p className='w-50 font-bold'>Level 15/607 Bourke St,
                Melbourne CBD VIC 3000</p>
              </div>

            </div>
          </div>


        </div>
      </div>
    </>
  )
}







