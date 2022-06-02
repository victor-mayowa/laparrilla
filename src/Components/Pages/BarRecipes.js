import React from "react";
import BarRecipesBody from "../BarRecipes/BarRecipesBody";
import Layout from "../Layout/Layout";
import BarRecipesHeader from "../BarRecipes/BarRecipesHeader";
import BarRecipesModal from "../BarRecipes/BarRecipesModal";

const BarRecipes = () => {
  return (
    <div>
      <Layout />
      <BarRecipesModal/>
      <div className="relative md:ml-[60px] ml-0">
        <BarRecipesHeader/>
        <BarRecipesBody />
      </div>
    </div>
  );
};

export default BarRecipes;
