import React from "react";
import CoursesCard from "./CoursesCard";
import CoursesData from "../Data/CoursesData";

const BaseTypeBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        {CoursesData.map((Courses)=>{
          return(
            <CoursesCard key={Courses.index} name={Courses.name}/>
          )
        })}
      </div>
    </div>
  );
};

export default BaseTypeBody;
