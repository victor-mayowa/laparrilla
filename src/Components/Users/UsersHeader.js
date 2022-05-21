import React from 'react'
import { Link } from 'react-router-dom'


const UsersHeader = () => {
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>Users</h1>

              <div>

                <Link to="/adduser">
                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >Add Users</button>

                </Link>
               
              </div>
            </div>
        </div>
  )
}

export default UsersHeader