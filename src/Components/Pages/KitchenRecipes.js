import React from "react";
import KitchenRecipesBody from "../KitchenRecipes/KitchenRecipesBody";
import Layout from "../Layout/Layout";
import KitchenHeader from "../KitchenRecipes/KitchenHeader";

const KitchenRecipes = () => {
  return (
    <div>
      <Layout />
      <div className="relative md:ml-[60px] ml-0">
        <KitchenHeader/>
        <KitchenRecipesBody />
      </div>
    </div>
  );
};

export default KitchenRecipes;
