import React from 'react'
import KitchenRecipesBody from '../KitchenRecipes/KitchenRecipesBody'
import Header from "../ui/Header"

const KitchenRecipes = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
      <Header name="KitchenRecipes" />
      <KitchenRecipesBody/>
    </div>
  )
}

export default KitchenRecipes