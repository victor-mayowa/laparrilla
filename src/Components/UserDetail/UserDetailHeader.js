import React from 'react'
import { Link } from 'react-router-dom'



const UserHeader = () => {
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>User</h1>

              <div>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >Edit User</button>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Delete User</button>

                <Link to="/users">
                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d]'>List Users</button>
                </Link>
               
              </div>
            </div>
        </div>
  )
}

export default UserHeader