import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa';


export const Faq = () => {

    const [activeQues, setActiveQues] = useState(null)

    const questions = [
        {
            id: 1,
            question: "Heavy Dust and Robust",
            answer: "The structure is composed of heavy-duty steel, providing superior strength, while the blade is made from HARDOX450",
            img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/68b8f5386c7bb93df58106dc_5.png"
        },

        {
            id: 2,
            question: "Durable Reversible code",
            answer: "HARDOX450 blades can be flipped and rotated to utilise four cutting edges on each section.",
            img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/68b8f5370d8fe6bd3f59858f_10.png"
        },

        {
            id: 3,
            question: "Precise Control",
            answer: "Our confidence in our quality speaks for itself with our industry-leading 5 Year warranty across our entire standard range of products. Our comprehensive warranty package covers absolutely everything outside of operator misuse or wear, so customers have the reassurance they deserve in our gear.",
            img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/68b8f538d3714b344fdac78f_6.png"
        },

        {
            id: 4,
            question: "Decreased Torsical  Tension",
            answer: "Hardened pins, bearings, and larger bushes reduce overall torsional tension and provide maximum support.",
            img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/68b8f5382ce33fb0f4891288_3.png"
        },

        {
            id: 5,
            question: "A grade Components",
            answer: "All attachments are custom, built for each customer's specific purpose and job site requirements. Generally, we aim to fulfill all orders within 8-12 weeks from the date of deposit, this varies depending on the complexity of the attachment.",
              img: "https://cdn.prod.website-files.com/66b04d5d579de4c891b7d363/68b8f5382ce33fb0f4891288_3.png"
        }


    ]
    return (
        <>
            <div className="parent h-auto bg-gray-200 px-20 pt-10 border-b-13 border-amber-300 max-sm:px-2 max-sm:h-200">
                <div className="child text-center text-[36px] font-bold max-sm:w-100 max-sm:px-2">
                    <h1>Product Features</h1>
                </div>

                <div className="questionpart ml-58 max-sm:ml-3 ">
                    {
                        questions.map((el, id) => (
                            <div key={id} className='' >

                                <button className=' flex justify-between cursor-pointer text-[20px] w-210 mt-10 font-bold border-b-2 max-sm:w-90 max-sm:text-[17px] max-sm:text-start max-sm:cursor-pointer' onClick={() => setActiveQues(activeQues === el.id ? null : el.id)}>

                                    {el.question}
                                    {activeQues === el.id ? <FaMinus /> : <FaPlus />}

                                </button>

                                <AnimatePresence >
                                    {activeQues === el.id && (
                                        <motion.div className='text-[16px]  mt-5 max-sm:text-[14px] max-sm:overflow-hidden'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className='w-200'>{el.answer}</p>
                                            <div className="div">
                                                <img src={el.img} alt="" className='w-200 h-90' />
                                            </div>

                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}