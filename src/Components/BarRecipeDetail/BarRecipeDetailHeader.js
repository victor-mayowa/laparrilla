import React, { useState } from 'react'


const BarRecipeDetailHeader = ({name}) => {

  const [showDropDown, setShowDropDown] = useState(false)

  const dropDownHandler = () =>{
    setShowDropDown(!showDropDown)
  }
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>{name}</h1>

              <ul className= "flex">
               <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >Edit</button> 
               <div>
               <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Print</button>
               </div>
               
               <div>
               <button onClick={dropDownHandler} className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d] relative'>More Action</button>
               <div className={ showDropDown ? 'absolute flex flex-col mt-4 bg-white p-5 items-start shadow-xl' : "hidden"}>
                 <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>Import</button>
                 <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>Export</button>
               </div>
               </div>
               
              </ul>
            </div>
        </div>
  )
}

export default BarRecipeDetailHeader