import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Icons from "../ui/Icons";
import UsersCard from "./UsersCard";
import UserData from "../Data/UsersData";

const UsersPageBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <p className="font-poppins font-light p-4 flex items-center">
          Bar Recipes <ChevronDownIcon className="w-5 ml-2" />
        </p>
        <div>
          {UserData.map((user) => {
            return (
              <UsersCard
                key={user.index}
                userName={user.userName}
                name={user.name}
                accessLevel={user.accessLevel}
                email={user.email}
              />
            );
          })}

          <Icons className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default UsersPageBody;
