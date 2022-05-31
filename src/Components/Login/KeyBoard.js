 import React, { useContext, useState } from "react";
 import Keyboard from "react-simple-keyboard";
 import "react-simple-keyboard/build/css/index.css";
 import DataContext from "../store/storeContext";
 

 
 const KeyBoard = () => {
     const dataCtx = useContext(DataContext)

     const setInputs = dataCtx.setInputs
     const inputName = dataCtx.inputName
     const keyboard = dataCtx.keyboard
    
  // const [inputs, setInputs] = useState({});
  // const [inputName, setInputName] = useState("default");
  // const keyboard = useRef();
    
   const [layoutName, setLayoutName] = useState("default");
   
  //  const keyboard = useRef();

   const onChangeAll = inputs => {
     /**
      * Here we spread the inputs into a new object
      * If we modify the same object, react will not trigger a re-render
      */
     setInputs({ ...inputs });
    //  console.log("Inputs changed", inputs);
   };
 
   const handleShift = () => {
     const newLayoutName = layoutName === "default" ? "shift" : "default";
     setLayoutName(newLayoutName);
   };
 

   const onKeyPress = button => {
    //  console.log("Button pressed", button);
 
     /**
      * If you want to handle the shift and caps lock buttons
      */
     if (button === "{shift}" || button === "{lock}") handleShift();
   };
 

  //  const onChangeInput = event => {
  //    const inputVal = event.target.value;
 
  //    setInputs({
  //      ...inputs,
  //      [inputName]: inputVal
  //    });
 
  //    keyboard.current.setInput(inputVal);
  //  };
 
  //  const getInputValue = inputName => {
  //    return inputs[inputName] || "";
  //  };
 
   return (
     <div className="mx-4">
       <Keyboard
         keyboardRef={r => (keyboard.current = r)}
         inputName={inputName}
         layoutName={layoutName}
         onChangeAll={onChangeAll}
         onKeyPress={onKeyPress}
       />
     </div>
   );
 }
 
export default KeyBoard