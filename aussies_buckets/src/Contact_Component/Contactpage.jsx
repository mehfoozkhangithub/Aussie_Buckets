import React from 'react'
import { useRef } from 'react';
import axios from 'axios'

export const Contactpage = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const inquiryRef = useRef("");
    const textRef = useRef("");


    const addContact = async(e) => {
        // e.preventDefault();                          ----not need when the arrow function is been used in button

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const inquiry = inquiryRef.current.value;
        const message = textRef.current.value;

        try{
            const Api = await axios.post ("https://api-4x2d.onrender.com/contact" , {name , email , inquiry , message}) ;
            console.log("show the data " ,Api.data)
            console.log({ name, email, inquiry, message });
            alert("Done..", + name);

            nameRef.current.value = '';
            emailRef.current.value = '';
            inquiryRef.current.value = '';
            textRef.current.value = '';

        }
        catch(err){
            console.log(err ,"Error is been occured")
        };
    }
   


    return (
        <>
            <div className="contactlist h-150 bg-amber-50 mt-10 w-140 ">
                <div className="mx-12 pt-5 ">
                    <h1 className='text-[38px] font-bold mb-5 '>Contact Us</h1>
                    <form action=""  className='flex flex-col w-100 '>

                        <input type="text" name='name' placeholder='Name' className='border-1 p-3 mt-5' 
                            ref={nameRef} 
                        />

                        <input type="text" name='email' placeholder=' Email' className='border-1  p-3 mt-5 '
                        ref={emailRef}
                        />


                        <select name="enquirytype" id="" ref={inquiryRef} className='border-1 p-3 mt-5'>
                            <option value="">Select Inquiry Type</option>
                            <option value="general">General Enquiry</option>
                            <option value="sales">Sales Enquiry</option>
                        </select>
                        <textarea name="" id="" placeholder='Enter the Text' ref={textRef} className='border-1 mt-5 p-3 h-40'></textarea>

                        <button className=' w-25 p-3 mt-5 bg-amber-300' type='button' onClick={() => addContact()} >submit</button>


                    </form>
                </div>
               
            </div>
        </>
    )
}

