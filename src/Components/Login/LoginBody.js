import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../store/storeContext";


const LoginBody = () => {
      const navigate = useNavigate()

      const dataCtx = useContext(DataContext)   
      const inputs = dataCtx.inputs
      const setInputs = dataCtx.setInputs
      const inputName = dataCtx.inputName
      const setInputName = dataCtx.setInputName
      const keyboard = dataCtx.keyboard
      // const isAuth = dataCtx.isAuth
      const setIsAuth = dataCtx.setIsAuth

    const onChangeInput = event => {
      const inputVal = event.target.value;
      setInputs({
        ...inputs,
        [inputName]: inputVal
      });
    
      keyboard.current.setInput(inputVal);
    };
    
    const getInputValue = inputName => {
     return inputs[inputName] || "";
    };


    const [show, setShow] = useState(false)

    
     const inputsLength =  Object.keys(inputs).length

      const submitHandler = (e) =>{
        e.preventDefault()

        if(inputsLength < 2){
          setShow(true)
          return( 
            setTimeout(()=>{
              setShow(false)
            },1000)
          )     
        }
        
        console.log(inputs)

        //for emptying the inputs
        for(const keys in inputs){
          delete inputs[keys]
        }

        setIsAuth(true)
        
        navigate("/allrecipes")
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
            value={getInputValue("UserName")}
            onFocus={()=> setInputName("UserName")}
            onChange={onChangeInput}
          />
           <p className={show ? "text-red-500 text-[14px] pl-3" : "hidden"}>Enter username</p>
          </div>
         

          <div className=" mb-8">
          <input
            className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-lg"

            id="Password"
            type="password"
            placeholder="Password"
            value={getInputValue("Password")}
            onFocus={()=> setInputName("Password")}
            onChange={onChangeInput}
            />
          <p className={show ? "text-red-500 text-[14px] pl-3" : "hidden"}>Enter password</p>
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
