import React from 'react'
import RecipePageBody from '../RecipePage/RecipePageBody'
import Header from '../ui/Header'

const RecipePage = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
        <Header name="1/2 SINGRIA"/>
        <RecipePageBody/>
    </div>
  )
}

export default RecipePage