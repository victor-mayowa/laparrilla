import React from "react";
import { useLocation } from "react-router-dom";
import BarRecipeDetailBody from "../BarRecipeDetail/BarRecipeDetailBody";
import BarRecipeDetailHeader from "../BarRecipeDetail/BarRecipeDetailHeader";
import Layout from "../Layout/Layout";

const RecipePage = () => {
  const locate = useLocation();

  const { user, name } = locate.state;

  return (
    <div>
      <Layout />
      <div className="relative md:ml-[60px] ml-0">
        <BarRecipeDetailHeader name={name} />
        <BarRecipeDetailBody user={user} />
      </div>
    </div>
  );
};

export default RecipePage;
