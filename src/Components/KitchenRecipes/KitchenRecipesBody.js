import React, {useContext} from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Icons from "../ui/Icons";
import KitchenRecipesCard from "./KitchenRecipesCards";
import DataContext from "../store/storeContext"

const KitchenRecipesBody = () => {
  const dataCtx = useContext(DataContext)

  const kitchenRecipes = dataCtx.kitchenRecipes
  
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          Kitchen Recipes <ChevronDownIcon className="w-5 ml-2" />
        </p>
        <div>
          {kitchenRecipes.map((data) => {
            return (
              <KitchenRecipesCard
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

export default KitchenRecipesBody;
