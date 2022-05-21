import React, { useState } from "react";

const AddUsersBody = () => {

  const [userName, setUserName] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [lang, setLang] = useState("")

const submitHandler = (e)=>{
  e.preventDefault();
  const data = {
    userName,
    name,
    email,
    lang
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
            <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={lang} onChange={(e)=>{
              const selected = e.target.value
              setLang(selected)         
            }}>
              <option value={"en"}>English</option>
              <option value={"fr"}>Chinese</option>
              <option value={"fr"}>Danish</option>
              <option value={"fr"}>Dutch</option>
              <option value={"fr"}>Estonian</option>
              <option value={"fr"}>French</option>
              <option value={"fr"}>German</option>
              <option value={"fr"}>Hungarian</option>
              <option value={"fr"}>Italian</option>
              <option value={"fr"}>Japanese</option>
              <option value={"fr"}>Korean</option>
              <option value={"fr"}>Norwegian</option>
              <option value={"fr"}>Portuguese</option>
              <option value={"fr"}>Turkish</option>
              <option value={"fr"}>Serbian</option>
              <option value={"fr"}>Spanish</option>
              <option value={"fr"}>Swedish</option>
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
