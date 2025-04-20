        import React from 'react'
        import { useState } from 'react'
        import {motion , AnimatePresence} from 'framer-motion'
        import { FaPlus , FaMinus } from 'react-icons/fa';


        export const FAQ = () => {

            const [activeQues , setActiveQues] = useState(null)

            const questions = [
                {
                    id : 1,
                    question :  "What are the next steps from here?",
                    answer: "Click the ‘quick quote’ button above to submit your enquiry information. On review, our attachment specialists will be in touch to confirm pricing, specifications, pin sizes and machine model before issuing an invoice. Upon receiving a 50% deposit, we will begin fabrication, providing key updates along the way until your attachment is delivered."
                },

                {
                    id : 2,
                    question : "How do I get in touch?",
                    answer: "Need to speak to a member of our team? Click on the ‘Quick Quote’ button above to fill out your enquiry details and one of our attachment specialists will be in touch. Alternatively, you can reach us via phone at (03) 9917 8598 or email at sales@aussiebuckets.com.au."
                },

                {
                    id : 3,
                    question :   "What kind of warranty do you offer?",
                    answer: "Our confidence in our quality speaks for itself with our industry-leading 5 Year warranty across our entire standard range of products. Our comprehensive warranty package covers absolutely everything outside of operator misuse or wear, so customers have the reassurance they deserve in our gear."
                },

                {
                    id : 4,
                    question : "Where are your attachments manufactured?",
                    answer: "We searched the globe for the best manufacturing capability, looking across Australia, Asia, India, Europe and the U.S. As a result we have 7 factories in China; three in South Korea and another one in Italy. China has the most advanced manufacturing in the world from both a quality and productivity perspective, this enables us to build quality, custom attachments at a reasonable price, passing those savings onto our customers and all with a comprehensive 5-year warranty package."
                },

                {
                    id : 5,
                    question :   "What are the lead times for orders?",
                    answer: "All attachments are custom, built for each customer's specific purpose and job site requirements. Generally, we aim to fulfill all orders within 8-12 weeks from the date of deposit, this varies depending on the complexity of the attachment."
                },

                {
                    id : 6,
                    question :  "What kind of after-sales support do you provide?",
                    answer: "All customers receive lifetime after-sales assistance, everything from technical troubleshooting through to general product care guidance, we’ve got you covered. Additionally, all returning customers receive 5% off or free shipping on future orders, demonstrating our commitment to customer service & satisfaction."
                }


            ]
        return (
            <>
            <div className="parent h-180 bg-gray-200 px-20 pt-10 border-b-13 border-amber-300">
                <div className="child text-center text-[36px] font-bold">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className="questionpart ml-70 ">
                    {
                        questions.map((el, id) => (
                            <div key={id} className=''>

                                <button className=' flex justify-between cursor-pointer text-[20px] w-200 mt-10 font-bold border-b-2' onClick={() => setActiveQues(activeQues === el.id ? null : el.id)}>

                                    {el.question}
                                    {activeQues === el.id ? <FaMinus /> : <FaPlus />}

                                </button>

                                    <AnimatePresence className=''>
                                        {activeQues === el.id && (
                                            <motion.div className='text-[16px] w-200 mt-5 '
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}>
                                                <p>{el.answer}</p>
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


