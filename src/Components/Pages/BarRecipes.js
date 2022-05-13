import React from 'react'
import BarRecipesBody from '../BarRecipes/BarRecipesBody'
import Header from '../ui/Header'

const BarRecipes = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
        <Header name="Bar recipes" buttons=""/>
        <BarRecipesBody/>
    </div>
  )
}

export default BarRecipes