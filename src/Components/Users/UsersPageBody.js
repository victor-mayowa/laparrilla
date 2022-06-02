import React, { useContext } from "react";
import Icons from "../ui/Icons";
import UsersCard from "./UsersCard";
import DataContext from "../store/storeContext";

const UsersPageBody = () => {

  const dataCtx = useContext(DataContext)
 const userData = dataCtx.userData
 
 

  
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <div>
          {userData.map((user) => {
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
