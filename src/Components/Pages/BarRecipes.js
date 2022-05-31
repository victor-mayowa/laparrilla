import React from "react";
import BarRecipesBody from "../BarRecipes/BarRecipesBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";

const BarRecipes = () => {
  return (
    <div>
      <Layout />
      <div className="relative md:ml-[60px] ml-0">
        <Header name="Bar recipes" buttons="" />
        <BarRecipesBody />
      </div>
    </div>
  );
};

export default BarRecipes;
