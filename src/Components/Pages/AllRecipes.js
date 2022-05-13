import React from "react";
import AllRecipesBody from "../AllRecipes/AllRecipesBody";
import Header from "../ui/Header";


const AllRecipes = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
       <Header name="All recipes" buttons="" />
      <AllRecipesBody/>
    </div>
  );
};
export default AllRecipes;
