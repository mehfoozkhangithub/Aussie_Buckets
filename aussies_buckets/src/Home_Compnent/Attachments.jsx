import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Attachments = () => {
    const [attachments, setAttachments] = useState([]);
    const [content, setContent] = useState(0);

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


    return (
        <>
            <div className='parent mt-20 bg-gray-200 py-10'>

                <h1 className='text-center text-[36px] font-bold '>High Quality Attachments For Every Job</h1>
                <div className="attachments flex justify-between gap-5 mx-30 mb-15 mt-20">



                    <div className="img  ">
                        {attachments.length > 0 &&
                            <img src={attachments[content].img} alt={attachments[content].h1} className='h-130 w-150 ' />}

                    </div>

                    <div>
                    {
                        attachments.map((el, id) => (
                            <div className='content cursor-pointer border-l-gray-400 border-l-4 hover:border-l-amber-300 pl-10 flex flex-row py-[13px]' >

                                <div className=" " key={id} onClick={() => setContent(id)}>
                                    <h1 className='text-[24px] font-bold mt-3'>{el.h1}</h1>
                                    <p className='w-140 text-[16px] mt-3'>{el.p}</p>
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

