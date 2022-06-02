import React from "react";
import AllRecipesBody from "../AllRecipes/AllRecipesBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";
import AllRecipesModal from "../AllRecipes/AllRecipesModal";

const AllRecipes = () => {
  return (
    <div>
      <Layout/>
      <AllRecipesModal/>
      <div className="relative md:ml-[60px] ml-0">
        <Header name="All recipes" buttons="" />
        <AllRecipesBody />
      </div>
    </div>
  );
};
export default AllRecipes;
