import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const IndustryCard = () => {
  const [card, setCard] = useState([]);
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState('')


  console.log(search);


  const ApisCard = "https://api-4x2d.onrender.com/Ausssies"

  const getsDataCard = async () => {
    try {
      let CardApi = await axios.get(ApisCard);
      let CardDatas = await CardApi.data;
      setCard(CardDatas);
    } catch (err) {
      console.log(err);

    }

  }

  useEffect(() => {
    getsDataCard();
  }, []);
  return (
    <>

      <div className="forms-about ">
        <form action="#" className='mx-32 my-20 h-40 relative max-md:mx-10 max-sm:mx-7'>
          <div className="form-input flex max-sm:block">
            <div className="first-input">
            <label className='p-3 border-1 border-gray-300 max-md:mb-20  max-sm:border-black max-sm:p-3.5 '> keyword </label>
          <input type="text" name='keyword' placeholder='None' className='w-130 border-1 border-gray-300 p-2.5 max-md:w-140 max-sm:w-60  max-sm:border-black  max-sm:p-3'
            onChange={(e) => setSearch(e.target.value)}
          />
            </div>
            <div className="second-input max-md:mt-6 ">
            <label className='ml-13 p-3 border-1 border-gray-300 max-md:ml-0   max-sm:border-black  max-sm:p-3.5 '>Category</label>
          
         
          <input type="text" className='w-120  border-1 border-gray-300 p-2.5 max-md:w-140 max-sm:w-59 max-sm:border-black  ' />
            </div>
          </div>
          
         

          <select placeholder='None' onChange={(e) => setOptions(e.target.value)} className='absolute right-17  w-100  top-3 text-black text-[18px] max-md:top-20 max-md:right-17  max-md:w-120 max-sm:w-40 max-sm:top-21 '>
          <option value="" >All </option>
            <option value="Bucket">Port & Underwear Works</option>
            <option value="Tunnelling" >Tunnelling</option>
            <option value="Trenching">Trenching</option>
            <option value="Roadworks">Roadworks</option>
            <option value="Bulk Material Handling">Bulk Material Handling</option>
            <option value="Recycling">Recycling</option>
            <option value="Agriculture & Forestry">Agriculture & Forestry</option>
            <option value="Demolition">Demolition</option>
            <option value="Construction & Building">Construction & Building</option>
            <option value="Landscaping">Landscaping</option>
            <option value="Utilities">Utilities</option>
            <option value="Quarries & Mines">Quarries & Mines</option>

          </select>




        </form>
      </div>


      <div className='cards grid grid-cols-4 mt-30 mr-30 ml-30 gap-10 mb-10 max-md:grid-cols-2 max-md:ml-10 max-md:mr-10 max-sm:grid-cols-1 max-sm:ml-8'>


        {
          card.filter((el) => {
            const matchesSearch = search === '' || el.name.toLowerCase().includes(search);
            const matchesCategory = options === '' || el.categories	 === options;
            return matchesSearch && matchesCategory;



          }).map((el, id) => (
            <>
              <div key={id} className=''>
                <img src={el.img} className='w-80 rounded-sm bg-gray-200 max-sm:w-120' />
                <h2 className='text-[14px] mt-4'>{el.price}</h2>
                <h1 className='text-[18px] mt-2 text-gray-400 font-semibold'>{el.name}</h1>
                <button className='p-3 border-1 w-full mt-5 rounded-sm hover:bg-black hover:text-white text-[16px]'>{el.btn} <i class="fa-solid fa-angle-right"></i></button>
              </div>
            </>

          ))
        }

      </div>
    </>
  )
}
