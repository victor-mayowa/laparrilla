import React from 'react'
import AddRecipesBody from '../AddRecipes/AddRecipesBody'
import Header from '../ui/Header'

const AddRecipes = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
        <Header name="Add recipes" buttons="hidden"/>
        <AddRecipesBody/>
    </div>
  )
}

export default AddRecipes