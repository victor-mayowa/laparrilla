import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../store/storeContext'


const KitchenRecipesHeader = () => {

  const dataCtx = useContext(DataContext)

  const AddCoursesModalHandler = dataCtx.AddCoursesModalHandler

  const AddBaseTypeModalHandler = dataCtx.AddBaseTypeModalHandler;

  const showDropDown = dataCtx.showDropDown

  const dropDownHandler = dataCtx.dropDownHandler
  return (
        <div className='max-w-[1240px] mx-auto bg-[#D5E7EF] flex p-8 top-0 pt-[153px]'>
            <div>
              <h1 className='text-4xl mb-5 font-regular font-poppins'>KitchenRecipes</h1>

              <ul className="flex">

                <Link to="/editkitchen">
               <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]' >Add recipes</button> 
                </Link>
               
               <div>
               <button className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Import</button>
               </div>
               
               <div>
               <button onClick={dropDownHandler} className='bg-[#007A7A] py-2 px-5 rounded-3xl text-white  text-[14px] hover:bg-[#0a8d8d] relative'>More Action</button>
               <div className={ showDropDown ? 'absolute flex flex-col mt-4 bg-white p-5 items-start shadow-xl' : "hidden"}>
                   <Link to="/basetype">
                 <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>List Base Type</button>
                 </Link>
                 <button onClick={AddBaseTypeModalHandler} className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>Add Base Type</button>
                 <button onClick={AddCoursesModalHandler}  className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>Add Courses</button>
                 <Link to="/courses">
                 <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>List Courses</button>
                 </Link>
                 <Link to="/users">
                 <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 mb-[6px] shadow-md text-[14px] hover:bg-[#0a8d8d]'>List Users</button>
                 </Link>
                
                <Link to="/adduser">
                <button className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 shadow-md text-[14px] hover:bg-[#0a8d8d]'>Add Users</button>
                </Link>
               </div>
               </div>
               
              </ul>
            </div>
        </div>
  )
}

export default KitchenRecipesHeader