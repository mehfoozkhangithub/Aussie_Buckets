import React from 'react'

export const Contactpage = () => {
    return (
        <>
            <div className="contactlist h-150 bg-amber-50 mt-10 w-140 ">
                <div className="contactlist">
                    <h1 className='text-[30px] font-bold mb-5'>Contact Us</h1>
                    <form action="">
                        <input type="text" name='name' placeholder='Enter the Name' className='border-1' /><br /><br />
                        <input type="text" name='email' placeholder='Enter the Email' className='border-1  ' />


                    </form>
                </div>
               
            </div>
        </>
    )
}

