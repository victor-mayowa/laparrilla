import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditPageBody = () => {

  const locate = useLocation()
  // console.log(locate)
  
  
  // const {userName,name,email} = locate.state
  const [userName, setUserName] = useState(locate.state.userName)
  const [name, setName] = useState(locate.state.name)
  const [email, setEmail] = useState(locate.state.email)
  const [accessLevel, setAccessLevel] = useState(locate.state.accessLevel)

const submitHandler = (e)=>{
  e.preventDefault();
  const data = {
    userName,
    name,
    email,
    accessLevel
  }
  console.log(data)
}
  return (
    <div className=" max-w-[1240px] mx-auto bg-white py-6">
      <div className="max-w-[1000px] mx-auto p-6 ">
        
        <form className=" max-w-[600px] flex flex-col md:items-center" onSubmit={submitHandler}>

          <div className="mb-6">
            <label className="mr-9 inline-block  w-[150px]">Username</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="text"
              placeholder="enter username"
              value={userName}
              onChange={(e)=>{
                setUserName(e.target.value)
              }}
            />
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Name</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="text"
              placeholder="enter Name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Email</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Password</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="password"
              placeholder="password"
            />
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">
              Confirm Password
            </label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="password"
              placeholder="confirm password"
            />
          </div>

          <div>
            <label className="mr-9 inline-block w-[150px]">AccessLevel</label>
            <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={accessLevel} onChange={(e)=>{
              const selected = e.target.value
              setAccessLevel(selected)         
            }}>
              <option value={90}>Admin</option>
              <option value={30}>View only</option>
            </select>
          </div>

          <div>
            <button className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 mt-6 hover:bg-[#0a8d8d]" type="submit">
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default EditPageBody;
