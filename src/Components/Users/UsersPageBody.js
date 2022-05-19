import React from "react";
import Icons from "../ui/Icons";
import UsersCard from "./UsersCard";
import UserData from "../Data/UsersData";

const UsersPageBody = () => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <div>
          {UserData.map((user) => {
            return (
              <UsersCard
                key={user.id}
                id={user.id}
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
