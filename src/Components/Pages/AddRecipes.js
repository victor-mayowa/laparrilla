import React from "react";
import AddRecipesBody from "../AddRecipes/AddRecipesBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";

const AddRecipes = () => {
  return (
    <div>
      <Layout/>
      <div className="relative md:ml-[60px] ml-0">
        <Header name="Add recipes" buttons="hidden" />
        <AddRecipesBody />
      </div>
    </div>
  );
};

export default AddRecipes;
