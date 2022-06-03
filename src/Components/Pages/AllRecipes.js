import React from "react";
import AllRecipesBody from "../AllRecipes/AllRecipesBody";
import Layout from "../Layout/Layout";
import AllRecipesModal from "../AllRecipes/AllRecipesModal";
import AllRecipesHeader from "../AllRecipes/AllRecipesHeader";
import AddCoursesModal from "../Courses/AddCoursesModal";
import AddBaseTypeModal from "../BaseType/AddBaseTypeModal";

const AllRecipes = () => {
  return (
    <div>
      <Layout/>
      <AllRecipesModal/>
      <AddCoursesModal/>
      <AddBaseTypeModal/>
      <div className="relative md:ml-[60px] ml-0">
        <AllRecipesHeader/>
        <AllRecipesBody />
      </div>
    </div>
  );
};
export default AllRecipes;
