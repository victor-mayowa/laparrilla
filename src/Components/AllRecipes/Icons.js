import React from 'react'
import { ChevronLeftIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/outline"

const Icons = () => {
  return (
    <div className='flex items-center justify-center'>
        <ChevronLeftIcon className='w-6 cursor-pointer'/>
        <div className='flex items-center justify-center mx-2'>
            <div className='w-4 h-4 rounded-[50%] border-2 border-[#003F5A] mr-2 cursor-pointer'></div>
            <div className='w-4 h-4 rounded-[50%] bg-[#CEDBE1] mr-2 cursor-pointer'></div>
            <div className='w-4 h-4 rounded-[50%] bg-[#CEDBE1] mr-2 cursor-pointer'></div>
            <div className='w-4 h-4 rounded-[50%] bg-[#CEDBE1] cursor-pointer'></div>
        </div>
        <ChevronRightIcon className='w-6 cursor-pointer'/>

    </div>
  )
}

export default Icons