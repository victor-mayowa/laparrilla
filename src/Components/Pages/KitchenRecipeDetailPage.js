import React from 'react'
import { useLocation } from 'react-router-dom'
import KitchenRecipeDetailBody from '../KitchenRecipeDetail/KitchenRecipeDetailBody'
import KitchenRecipeDetailHeader from "../KitchenRecipeDetail/KitchenRecipeDetailHeader"
import Layout from "../Layout/Layout";

const KitchenRecipeDetailPage = () => {
  const locate = useLocation()

  const {user, name} = locate.state

  return (
    <div >
       <Layout/>
<div className= "relative md:ml-[60px] ml-0">
        <KitchenRecipeDetailHeader name={name}/>
        <KitchenRecipeDetailBody user={user}/>
    </div>
    </div>
    
  )
}

export default KitchenRecipeDetailPage