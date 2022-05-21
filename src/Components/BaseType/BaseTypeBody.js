import React from "react";
import BaseTypeCard from "./BaseTypeCard";
import BaseTypeData from "../Data/BaseTypeData"

const BaseTypeBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
       {BaseTypeData.map((BaseType)=>{
         return(
           <BaseTypeCard key={BaseType.index} name={BaseType.name}/>
         )
       })}
      </div>
    </div>
  );
};

export default BaseTypeBody;
