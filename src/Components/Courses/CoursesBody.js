import React, {useContext} from "react";
import CoursesCard from "./CoursesCard";
import DataContext from "../store/storeContext";


const BaseTypeBody = () => {
  const dataCtx = useContext(DataContext)
  const coursesData = dataCtx.coursesData
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        {coursesData.map((Courses)=>{
          return(
            <CoursesCard key={Courses.id} id={Courses.id} name={Courses.name}/>
          )
        })}
      </div>
    </div>
  );
};

export default BaseTypeBody;
