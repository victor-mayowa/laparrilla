import React from "react";
import Logo from "../assests/La-Parrilla-load-Logo.png";
import { MenuIcon } from "@heroicons/react/solid";

import { Link } from "react-router-dom";

const LoginNavbar = () => {


  return (
    <div className="bg-[#003F5A]  w-full fixed z-10">
      <div className=" py-5 mx-auto flex justify-between items-center px-5">
        <div className="flex items-end">
          <div className="pr-6 mb-1 ">
          </div>

          <div>
            
              <img src={Logo} alt="Logo" className="w-[120px] " />
          
          </div>

        </div>

        <div>
          <input
            className="py-2 px-4 rounded-lg text-[14px]"
            type="text"
            placeholder="Select a language"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
