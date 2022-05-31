import React from "react";
import AllRecipesBody from "../AllRecipes/AllRecipesBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";

const AllRecipes = () => {
  return (
    <div>
      <Layout/>
      <div className="relative md:ml-[60px] ml-0">
        <Header name="All recipes" buttons="" />
        <AllRecipesBody />
      </div>
    </div>
  );
};
export default AllRecipes;
