import React from "react";
import KitchenRecipesBody from "../KitchenRecipes/KitchenRecipesBody";
import Header from "../ui/Header";
import Layout from "../Layout/Layout";

const KitchenRecipes = () => {
  return (
    <div>
      <Layout />
      <div className="relative md:ml-[60px] ml-0">
        <Header name="KitchenRecipes" />
        <KitchenRecipesBody />
      </div>
    </div>
  );
};

export default KitchenRecipes;
