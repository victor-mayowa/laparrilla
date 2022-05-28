import React from 'react'
import EditBarPageBody from '../EditBar/EditBarPageBody'
import Header from "../ui/Header"


const EditBarPage = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
         <Header name="Recipes" buttons="hidden"/>
        <EditBarPageBody/>
    </div>
  )
}

export default EditBarPage