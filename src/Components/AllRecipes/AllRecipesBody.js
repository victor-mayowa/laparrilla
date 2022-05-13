import React from "react";
import Icons from "./Icons";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Cards from "../ui/Cards";

const AllRecipesBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          All Recipes <ChevronDownIcon className="w-5 ml-2" />
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

export default AllRecipesBody;
