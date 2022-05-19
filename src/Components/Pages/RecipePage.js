import React from 'react'
import { useLocation } from 'react-router-dom'
import RecipePageBody from '../RecipePage/RecipePageBody'
import Header from '../ui/Header'

const RecipePage = () => {
  const locate = useLocation()

  const {user, name} = locate.state

  return (
    <div className= "relative md:ml-[60px] ml-0">
        <Header name={name}/>
        <RecipePageBody user={user}/>
    </div>
  )
}

export default RecipePage