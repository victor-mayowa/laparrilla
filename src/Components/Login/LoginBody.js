import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../store/storeContext";
import { Formik } from "formik";


const LoginBody = () => {

 
      const navigate = useNavigate()

      const dataCtx = useContext(DataContext)   
      const inputs = dataCtx.inputs
      const setInputs = dataCtx.setInputs
      const inputName = dataCtx.inputName
      const setInputName = dataCtx.setInputName
      const keyboard = dataCtx.keyboard
      const setIsAuth = dataCtx.setIsAuth

      const [formError, setFormError] = useState({})
      const [submit, setSubmit] = useState(false)
      // console.log(inputs)

    const onChangeInput = event => {
      const inputVal = event.target.value;
      setInputs({
        ...inputs,
        [inputName]: inputVal
      });
      
      keyboard.current.setInput(inputVal);
    };

    const getInputValue = name => {
     return inputs[name] || "";
    };

    const validate = (values) =>{
      const error = {}

      if(!values.userName){
        error.userName = "Username cannot be blank"
      }else if(values.userName.length < 2){
        error.userName = "Username must not be less than two"
      }

      if(!values.password){
        error.password = "Password cannot be blank"
      }else if (values.password.length < 4){
        error.password = "Password must not be less than four"
      }

      return error
    }

    const finalSubmit = () =>{
      console.log(inputs)
        //for emptying the inputs
        for(const keys in inputs){
          delete inputs[keys]
        }
        setIsAuth(true)
        navigate("/allrecipes")
    }

    useEffect(() => {
      if(Object.keys(formError).length === 0 && submit) {
        finalSubmit()
      }
    },[formError])


      const submitHandler = (e) =>{
        e.preventDefault()
        setFormError(validate(inputs))
        setSubmit(true)
      }

  return (
    <div className="max-w-[500px] mx-auto pt-[153px] pb-10">

      <div className="bg-white flex flex-col items-center justify-center shadow-xl rounded-md">

        <h1  className="text-3xl my-10">USER LOGIN</h1>

        <form onSubmit={submitHandler} className="flex flex-col items-center w-full">

          <div className="mb-8">

          <input
            className="py-2 pl-2  w-[400px] border-[1px] border-slate-600 rounded-lg"

            id="UserName"
            type="text"
            placeholder="UserName"
            value={getInputValue("userName")}
            onFocus={()=> setInputName("userName")}
            onChange={onChangeInput}
          />
           <p className={formError.userName ? "text-red-500 text-[14px] pl-3" : "hidden"}>{formError.userName}</p>
          </div>
         

          <div className=" mb-8">
          <input
            className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-lg"

            id="Password"
            type="password"
            placeholder="Password"
            value={getInputValue("password")}
            onFocus={()=> setInputName("password")}
            onChange={onChangeInput}
            />
          <p className={formError.password ? "text-red-500 text-[14px] pl-3" : "hidden"}>{formError.password}</p>
          </div>
          
         
          <div className="flex items-end justify-end w-full">
            <button  className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 mr-6 my-6 hover:bg-[#0a8d8d]">Submit</button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default LoginBody;
