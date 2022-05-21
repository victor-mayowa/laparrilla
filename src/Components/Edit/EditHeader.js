import React from 'react'
import { Link } from 'react-router-dom'


const EditHeader = () => {
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>User/Edit</h1>

              <div>

                <Link to="/basetype">
                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d] mb-2 sm:mb-0' >List Base Types</button>
                </Link>
                

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d] mb-2 sm:mb-0'>Add Base Types</button>

                <Link to="/courses">
                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] mr-3 hover:bg-[#0a8d8d] mb-2 sm:mb-0'>List Courses</button>
                </Link>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d] mb-2 sm:mb-0'>Add Courses</button>

                <Link to="/users">
                <button className='bg-[#007A7A] mt-2  py-2 px-5 rounded-3xl text-white ml-3  text-[14px] hover:bg-[#0a8d8d]'>List Users</button>
                </Link>
              </div>
            </div>
        </div>
  )
}

export default EditHeader