import React, { useContext, useState } from "react";
// import DataContext from "../store/storeContext";
import {useNavigate} from "react-router-dom"

const AddUsersBody = () => {
  const navigate = useNavigate()

  // const dataCtx = useContext(DataContext)
  // const userData = dataCtx.userData
  // const setUserData = dataCtx.setUserData

  const [userName, setUserName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [lang, setLang] = useState("")

const submitHandler = (e)=>{
  e.preventDefault();
  const data = {
    userName,
    name,
    email
  }
  console.log(data)
  // setUserData(data)
  navigate("/users")
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
            <label className="mr-9 inline-block w-[150px]">Language</label>
            <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={lang} onChange={(e)=>{
              const selected = e.target.value
              setLang(selected)         
            }}>
              <option value={"en"}>English</option>
              <option value={"zh"}>Chinese</option>
              <option value={"da"}>Danish</option>
              <option value={"nl"}>Dutch</option>
              <option value={"et"}>Estonian</option>
              <option value={"fr"}>French</option>
              <option value={"de"}>German</option>
              <option value={"hu"}>Hungarian</option>
              <option value={"it"}>Italian</option>
              <option value={"ja"}>Japanese</option>
              <option value={"ko"}>Korean</option>
              <option value={"nn"}>Norwegian</option>
              <option value={"pt"}>Portuguese</option>
              <option value={"tr"}>Turkish</option>
              <option value={"sr"}>Serbian</option>
              <option value={"es"}>Spanish</option>
              <option value={"sv"}>Swedish</option>
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

export default AddUsersBody;
