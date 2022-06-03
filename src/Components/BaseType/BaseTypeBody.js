import React, {useContext} from "react";
import BaseTypeCard from "./BaseTypeCard";
import DataContext from "../store/storeContext";

const BaseTypeBody = () => {
  const dataCtx = useContext(DataContext)
  const baseTypeData = dataCtx.baseTypeData


  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
       {baseTypeData.map((BaseType)=>{
         return(
           <BaseTypeCard key={BaseType.id} id={BaseType.id} name={BaseType.name}/>
         )
       })}
      </div>
    </div>
  );
};

export default BaseTypeBody;
