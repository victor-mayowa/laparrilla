import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({name, buttons, link, buttonName}) => {
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>{name}</h1>

              <div className={`${buttons}`}>

                <Link to="addrecipes">
                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >Add recipes</button>
                </Link>
               

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Import</button>

                <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d]'>More Action</button>
              </div>
            </div>
        </div>
  )
}

export default Header