import React, { useEffect, useState } from "react";
import axios from "axios";

export const Video = () => {
  const [datas, setDatas] = useState([]);
 const [video, setVideo] = useState(false);

  const Apis = "https://api-4x2d.onrender.com/video_img";

  const getDatas = async () => {
    try {
      let DataApis = await axios.get(Apis);
      let FullDatas = await DataApis.data;
      setDatas(FullDatas);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 mt-20 mr-30 ml-30 gap-9 relative max-md:grid-cols-1  max-md:ml-15 max-md:mr-10   ">
        {datas.map((el, id) => (
          <>
            <div key={id} className="text-center h-110 bg-gray-200 rounded-xl max-md:w-160 max-md:h-140 ">
              <img src={el.img}  alt="" className="rounded-sm " onClick={() => setVideo(!video)}  />
                <img src={el.font} className="w-14 top-24  z-90 left-44 rounded-[50%] bg-amber-50  absolute" alt="" />
              <img src={el.star} alt="" className="ml-34 w-35 mt-5 max-md:ml-62" />
              <div>
   
   <h1 className="text-[24px] font-[700] mt-2 ">{el.h2}</h1>
              <p className="mt-3 text-[16px] font-[400]">{el.hr}</p>
              </div>
              
            </div>
          </>
        ))}
      </div>
      {
        video && (
          <>
          <div className="fixed  flex justify-center items-center top-0  z-100 w-full backdrop-blur-xl h-full   ">
            <button onClick={() => setVideo(false)} className="absolute top-8 right-9 text-[35px] ">X</button>
            <div>
          <iframe
    width="610"
    height="400"
    src="https://www.youtube.com/embed/JfxlsiFztLs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  </div>
          </div>
          </>
        )
      }
    </>
  );
};
