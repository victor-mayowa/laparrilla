import React,{useContext} from 'react'
import DataContext from '../store/storeContext'

const Backdrop = () => {
  const dataCtx = useContext(DataContext)
  const toggle = dataCtx.toggle
  const toggleHandler = dataCtx.toggleHandler
  
  return (
    <div className={!toggle ? "h-[100vh] fixed z-10 bg-[rgba(0,0,0,0.64)] w-full " : "ml-[-1500px]"} onClick={toggleHandler}>

    </div>
  )
}

export default Backdrop