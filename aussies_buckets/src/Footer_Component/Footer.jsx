import React from 'react'
import footie from "../assets/Footer.png"

const Footer = () => {
    return (
        <>
            <div className='bg-black w-full h-200 text-white mr-10 '  >

                <div className="part pt-25 w-100%  flex justify-evenly">

                    <div className="info  ">
                        <img src={footie} alt="" className='w-70 pb-10' />
                        <p className='w-90  text-[14px]'>© 2024 by Aussie Buckets, a Kuzmich Watts & Tomich Group Pty Ltd company. The words Aussie Buckets and its associated logo have registered trademarks within Australia. Use of this site is subject to our Website Terms of Use which are available here.
                        </p>
                        <p className=' mt-10 w-100 text-[14px]'>The photo's used on our website display various tonnages and are indicative only - to confirm all wear and design elements please discuss your needs with an attachment specialist first. Final design and wear elements may vary across various tonnages.</p>
                    </div>

                    <div className='Quick-links'>
                        <h1 className='text-[18px] text-yellow-300 font-bold mb-3'>QUICK LINKS</h1>
                        <p className='mb-4 text-[14px] font-medium'>industries</p>
                        <p className='mb-4 text-[14px] font-medium'>Careers</p>
                        <p className='mb-4 text-[14px] font-medium'>Products</p>
                        <p className='mb-4 text-[14px] font-medium'>Contacts</p>
                        <p className='mb-4 text-[14px] font-medium'>Manufacturing</p>
                        <p className='mb-4 text-[14px] font-medium'>Why AB?</p>

                    </div>

                    <div className="continue mt-10">
                        <p className='mb-4 text-[14px] font-medium'>Blog</p>
                        <p className='mb-4 text-[14px] font-medium'>Legal</p>
                        <p className='mb-4 text-[14px] font-medium'>Accounts</p>
                        <p className='mb-4 text-[14px] font-medium'>Testimonials</p>

                    </div>
                    <div className='Products '>
                        <h1 className='text-[18px] text-yellow-300 font-bold mb-3'>PRODUCTS</h1>
                        <p className='mb-4 text-[14px] font-medium'>Excavator</p>
                        <p className='mb-4 text-[14px] font-medium'>Excavator Grabs</p>
                        <p className='mb-4 text-[14px] font-medium'>Excavator Attachments</p>
                        <p className='mb-4 text-[14px] font-medium'>Performance Range</p>
                    </div>

                    <div className='Industries '>
                        <h1 className='text-[18px] text-yellow-300 font-bold mb-3'>iNDUSTRIES</h1>
                        <p className='mb-4 text-[14px] font-medium'>Landscapes</p>
                        <p className='mb-4 text-[14px] font-medium'>Demolition</p>
                        <p className='mb-4 text-[14px] font-medium'>Constrution & Building</p>
                        <p className='mb-4 text-[14px] font-medium'>Recycling</p>
                        <p className='mb-4 text-[14px] font-medium'>Agriculture & Forest</p>
                        <p className='mb-4 text-[14px] font-medium'>Ports & Underwater</p>

                    </div>

                    <div className="continue-2 mt-10">
                        <p className='mb-4 text-[14px] font-medium'>Quarries & Mines</p>
                        <p className='mb-4 text-[14px] font-medium'>Tunnelling</p>
                        <p className='mb-4 text-[14px] font-medium'>Utilities</p>
                        <p className='mb-4 text-[14px] font-medium'>Trenching</p>
                        <p className='mb-4 text-[14px] font-medium'>Roadworks</p>
                        <p className='mb-4 text-[14px] font-medium'>Bulk Material Handling</p>

                    </div>

                </div>

                <hr className='mx-17 my-15' />

                <div className="logos-copy mx-17 flex justify-between ">
                   
                   <div className="copy">
                        <h1>&#169; Aussie Buckets</h1>
                   </div>

                   <div className="logos ">
                     <a href=""><i class="fa-brands fa-instagram mr-5 text-[20px]" ></i></a>
                     <a href=""><i class="fa-brands fa-facebook mr-5 text-[20px]"></i></a>
                     <a href=""><i class="fa-brands fa-x-twitter mr-5 text-[20px]"></i></a>
                     <a href=""><i class="fa-brands fa-linkedin mr-5 text-[20px]"></i></a>
                     <a href=""><i class="fa-brands fa-youtube mr-5 text-[20px]"></i></a>
                   </div>
                </div>
               
            </div>
        </>
    )
}

export default Footer
