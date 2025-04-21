import React, { useEffect, useState } from "react";
import axios from "axios";

export const Video = () => {
  const [datas, setDatas] = useState([]);
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
      <div className="grid grid-cols-3 mt-20 mr-30 ml-30 gap-9">
        {datas.map((el, id) => (
          <>
            <div key={id} className="text-center h-110 bg-gray-200 rounded-xl">
              <img src={el.img} alt="" className="rounded-xl" />
              <img src={el.star} alt="" className="ml-34 w-35 mt-5" />
              <div>
<h1 className="text-[24px] font-[700] mt-2 ">{el.h2}</h1>
              <p className="mt-3 text-[16px] font-[400]">{el.hr}</p>
              </div>
              
            </div>
          </>
        ))}
      </div>
    </>
  );
};
