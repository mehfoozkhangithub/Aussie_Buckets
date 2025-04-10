import React from 'react'
import { useRef } from 'react';

export const Contactpage = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");



    // const Api = "https://api-4x2d.onrender.com/contact";

    const change = (e) => {
        nameRef.current = e.target.value;
        emailRef.current = e.target.value;
    }

    const click = () => {
        alert(`alert this : ${nameRef.current}`, $(emailRef.current))
        alert
    }




    return (
        <>
            <div className="contactlist h-150 bg-amber-50 mt-10 w-140 ">
                <div className="mx-12 pt-5 ">
                    <h1 className='text-[38px] font-bold mb-5 '>Contact Us</h1>
                    <form action="" className='flex flex-col w-100 '>

                        <input type="text" name='name' placeholder='Name' className='border-1 p-3 mt-5' 
                            onChange={change}
                        />

                        <input type="text" name='email' placeholder=' Email' className='border-1  p-3 mt-5 '
                        onChange={change} />


                        <select name="enquirytype" id="" className='border-1 p-3 mt-5'>
                            <option value="">Select Inquiry Type</option>
                            <option value="general">General Enquiry</option>
                            <option value="sales">Sales Enquiry</option>
                        </select>
                        <textarea name="" id="" placeholder='Enter the Text' className='border-1 mt-5 p-3 h-40'></textarea>

                        <button className=' w-25 p-3 mt-5 bg-amber-300' onClick={click}>submit</button>


                    </form>
                </div>
               
            </div>
        </>
    )
}

