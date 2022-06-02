import React, {useContext} from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Icons from "../ui/Icons";
import BarRecipesCards from "./BarRecipesCards";
import DataContext from "../store/storeContext";

const BarRecipesBody = () => {
  const dataCtx = useContext(DataContext)
  const barRecipes = dataCtx.barRecipes
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          Bar Recipes <ChevronDownIcon className="w-5 ml-2" />
        </p>
        <div>
         
          {barRecipes.map((data) => {
            return (
              <BarRecipesCards
                key={data.id}
                id={data.id}
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

export default BarRecipesBody;
