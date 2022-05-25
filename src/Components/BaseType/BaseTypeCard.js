import React,{useContext} from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import DataContext from "../store/storeContext";

const BaseTypeCard = ({ name }) => {

  const dataCtx = useContext(DataContext)

  const DeleteBaseTypeModalHandler= dataCtx.DeleteBaseTypeModalHandler

  const EditBaseTypeModalHandler = dataCtx.EditBaseTypeModalHandler


  return (
    <div className="bg-[#CEDBE1] flex max-w-[700px] justify-between items-center mx-auto px-10 py-5 shadow-lg mb-5">
       
      <div className=" text-center">
        <p className="text-[14px] font-light mb-8">Name</p>
        <p className="font-medium text-[18px]">
          {name}
        </p>
      </div>

      <div className="text-center">
        <p className="mb-8">Actions</p>
        <div className="flex justify-center items-center">  
          <PencilAltIcon onClick={EditBaseTypeModalHandler} className="w-5 text-[#07335E] cursor-pointer mr-2 hover:text-[#07335eb4]" />
          <TrashIcon onClick={DeleteBaseTypeModalHandler} className="w-5 text-[#8A1818] cursor-pointer hover:text-[#8a1818d7]" />
        </div>
      </div>

    </div>
  );
};

export default BaseTypeCard;