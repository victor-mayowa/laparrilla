import React from 'react'
import EditBarPageBody from '../EditBar/EditBarPageBody'
import Header from "../ui/Header"
import Layout from "../Layout/Layout";


const EditBarPage = () => {
  return (
    <div>
      <Layout/>
      <div className= "relative md:ml-[60px] ml-0">
         <Header name="Recipes" buttons="hidden"/>
        <EditBarPageBody/>
    </div>
    </div>
    
  )
}

export default EditBarPage