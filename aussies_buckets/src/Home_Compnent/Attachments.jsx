import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Attachments = () => {
    const [attachments, setAttachments] = useState([]);
    const [content, setContent] = useState(0);
    const [animate, setAnimate] = useState(false);

    const Api = "https://api-4x2d.onrender.com/attachments";
    const fetchData = async () => {
        try {
            const data = await axios.get(Api);
            const full = await data.data;
            setAttachments(full);
            console.log(full)
        } catch (err) {
            console.log(err, "dont display the card");
        }
    }
    useEffect(() => {
        fetchData();
    }, [])


    const defaultStyle = {
        borderLeft: '7px solid white', 
        backgroundColor: 'rgba(0, 0, 0, 0)'
    };

    const activeStyle = {
        borderLeft: '4px solid yellow',
        color: 'black',
       
    }

    useEffect(() => {
        // Trigger animation when content changes
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 400); // reset after animation
        return () => clearTimeout(timeout);
      }, [content]);


    return (
        <>
            <div className='parent mt-20 bg-gray-200 py-10 max-sm:overflow-hidden'>

                <h1 className='text-center text-[36px] font-bold '>High Quality Attachments For Every Job</h1>
                <div className="attachments flex justify-between gap-5 mx-30 mb-15 mt-20 max-sm:flex max-sm:flex-col-reverse max-sm:gap-5 max-sm:mx-7 max-sm:my-10 ">



                    <div className="max-sm:w-91 max-sm:mt-5 max-sm:h-90">
                        {attachments.length > 0 &&
                            <img src={attachments[content].img} alt={attachments[content].h1}
                            className={`h-130 w-150 object-cover rounded-md transition-all duration-500 ease-in-out max-sm:h-100 ${
                                animate ? 'opacity-0 ' : 'opacity-100 '
                            }`} />}

                    </div>

                    <div>
                    {
                        attachments.map((el, id) => (
                            <div className='content cursor-pointer border-l-gray-400 border-l-4  pl-10 flex flex-row py-[13px] max-sm:cursor-pointer ' style={content === id ? activeStyle : defaultStyle} >

                                <div className="max-sm:ml-0 " key={id} onClick={() => setContent(id)} >
                                    <h1 className='text-[24px] font-bold mt-3'>{el.h1}</h1>
                                    <p className='w-140 text-[16px] mt-3 max-sm:w-80'>{el.p}</p>
                                </div>
                            </div>

                        ))
                    }

                    </div>

                </div>
            </div>



        </>
    );
};

