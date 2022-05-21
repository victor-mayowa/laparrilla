import React from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Cards = ({id, userName, name, accessLevel, email }) => {
  return (
      <div className="bg-[#CEDBE1] flex max-w-[1000px] justify-between items-center mx-auto px-10 py-5 shadow-lg mb-8">
        <div className=" text-center">
          <p className="text-[14px] font-light mb-8">Username</p>
          <h1 className="font-medium text-xl">{userName}</h1>
        </div>

        <div className=" text-center">
          <p className="text-[14px] font-light mb-8">Name</p>
          <p className="font-regular text-[16px]">{name}</p>
        </div>

        <div className=" text-center">
          <p className="text-[14px] font-light mb-8">Access Level</p>
          <p className="font-regular text-[14px]">{accessLevel}</p>
        </div>

        <div className=" text-center">
          <p className="text-[14px] font-light mb-8">Email</p>
          <p className="font-regular underline text-[14px]">{email}</p>
        </div>

        <div className="text-center">
          <p className="mb-8">Actions</p>
          <div className="flex justify-center items-center">
          <Link to={`/user/view/${id}`} state={{
            id:id, userName:userName, name:name, accessLevel:accessLevel, email:email
          }}>
            <button className="py-1 px-4 bg-[#0879aa2c] rounded-3xl mr-1 hover:bg-[#0879aa11]">
              view
            </button>
            </Link>

            <Link to="/edit" state={{
             id:id, userName:userName, name:name, accessLevel:accessLevel, email:email
            }}>
            <PencilAltIcon className="w-6 text-[#07335E] cursor-pointer mr-1 hover:text-[#07335eb4]" />
            </Link>

            <TrashIcon className="w-6 text-[#8A1818] cursor-pointer mr-1 hover:text-[#8a1818d7]" />

          </div>
        </div>
      </div>
  );
};

export default Cards;
