import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Cards from "../ui/Cards";
import Icons from "../AllRecipes/Icons";

const BarRecipesBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          Bar Recipes <ChevronDownIcon className="w-5 ml-2" />
        </p>
        <div>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Icons className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default BarRecipesBody;
