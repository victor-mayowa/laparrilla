import React from "react";
import { MdOutlineKitchen, MdOutlineLocalBar } from "react-icons/md";
import { Link } from "react-router-dom";

const AddRecipesBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4  h-[60vh]">
        <div className="flex flex-col items-center justify-center my-10">
          <h1 className="font-light">¿Qué receta le gustaría agregar?</h1>
          <h1 className="font-light">Which Recipe will you like to add ?</h1>
        </div>

        <div className="flex flex-col items-center justify-center py-10 md:flex-row">
          <Link to="/editbar">
            <button className="flex items-center justify-center bg-[#007A7A] py-4 px-20 rounded-2xl text-white md:mr-[12rem] text-[16px] hover:bg-[#0a8d8d]  mb-4 md:mb-0">
              <MdOutlineLocalBar size={25} className="mr-2" /> Add Bar recipes
            </button>
          </Link>

          <Link to="/editKitchen">
            <button className="flex  items-center justify-center bg-[#007A7A] py-4 px-20 rounded-2xl text-white  text-[16px] hover:bg-[#0a8d8d] mr-3">
              <MdOutlineKitchen size={25} className="mr-2" /> Add kitchen
              recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRecipesBody;
