import React from 'react';
import axios from 'axios';
import Marquee from 'react-fast-marquee';

export const Rating = () => {
    const [ratingData, setRatingData] = React.useState([]);

    const Api = "https://api-4x2d.onrender.com/Ratings";

    const fetchData = async () => {
        try {
            const data = await axios.get(Api);
            const fulldata = await data.data; 
            setRatingData(fulldata);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

  return (
    <>
      <div className="Ratings text-center bg-gray-200 py-15 max-sm:h-270">

          <h1 className='text-[36px] font-bold w-150 justify-self-center max-sm:w-100'>Trusted by Industry Experts Across Australia</h1>
          <p className='w-187 justify-self-center text-[18px] mt-5 max-sm:w-90'>Join hundreds of satisfied clients who trust Aussie Buckets for their excavator attachment needs. From local projects to nationwide operations, we’re proud to be the partner you can rely on. 
          <span className='bg-amber-400'>We have 229+ reviews on Google with a rating of 4.7/5!</span></p>
          <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/67bfe3daf155f4901541eb7f_Google-Review-Logo-1.png" alt="" className='h-15 justify-self-center mt-5'/>

      <Marquee direction='left' speed={80} pauseOnClick={true}>
      <div className="Rating-Cards flex w-800 pt-15 ">
           {
              ratingData.map((el,id) => (

                <div key={id} className='w- text-start ml-10 bg-white pr-10 pl-10 py-5 '>
                  <img src={el.stars} alt=""  className='h-15'/>
                  <p className='mt-5 '>{el.p}</p>
                  <h1 className='mt-10 font-bold'>{el.name}</h1>
                  <p className=''>{el.p2}</p>
                </div> 

              ))
           }
        </div>
      </Marquee>
     </div>
    </>
  )
}


