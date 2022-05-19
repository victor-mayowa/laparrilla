import React from 'react'


const EditHeader = () => {
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>User/Edit</h1>

              <div>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >List Base Types</button>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Add Base Types</button>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] mr-3 hover:bg-[#0a8d8d]'>List Courses</button>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d]'>Add Courses</button>
              </div>
            </div>
        </div>
  )
}

export default EditHeader