import React, { useEffect, useContext } from "react";
import { useLocation} from "react-router-dom";
import DataContext from "../store/storeContext";

const UserPageBody = () => {

  const dataCtx = useContext(DataContext)

  const setData = dataCtx.setData

  const locate = useLocation()
  const data = locate.state

useEffect(()=>{
  setData(data)
})



  // setLocation(locate)
  // console.log(location)
  


const {id, userName, name, accessLevel, email} = locate.state

// console.log(locate)


  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1140px] mx-auto py-6 ">
      
        <div className="bg-[#D5E7EF] p-6 rounded-lg shadow-md">
          <div className="px-4">  
           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins">ID</span>{id}</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Username</span>{userName}</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Name</span>{name}</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Access Level</span>{accessLevel}</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins">Language</span>en</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Country</span>us</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Name</span>2017-09-16 01:23:30</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Last Login</span></p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Email</span>{email}</p>

           <p className="flex items-center justify-between max-w-[400px] mb-2"><span className="font-bold font-poppins mr-10">Modified</span>2018-10-23  19:35:00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserPageBody;
