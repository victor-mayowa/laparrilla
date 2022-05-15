import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Cards from "../ui/Cards";
import Icons from "../ui/Icons";
import KitchenData from "../Data/KitchenData";

const KitchenRecipesBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          Bar Recipes <ChevronDownIcon className="w-5 ml-2" />
        </p>
        <div>
        {KitchenData.map((data) => {
            return (
              <Cards
                key={data.index}
                name={data.name}
                comment={data.comment}
                user={data.user}
              />
            );
          })}
          <Icons className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default KitchenRecipesBody;
