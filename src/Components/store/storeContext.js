import React, { createContext, useRef, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {

  ///states from keyBoard components 
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("UserName")
  const keyboard = useRef()

  //state for inputs in login page
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")


  const [toggle, setToggle] = useState(true);

  const [showModal, setShowModal] = useState(false)

   //state for delete icon in baseType page
  const [deleteBaseTypeModal, setDeleteBaseTypeModal] = useState(false)

   //state for add icon in baseType page
  const [addBaseTypeModal, setAddBaseTypeModal] = useState(false)

  //state for edit icon in baseType page
  const [editBaseTypeModal, setEditBaseTypeModal] = useState(false)


   //state for delete icon in Courses page
  const [deleteCoursesModal, setDeleteCoursesModal] = useState(false)

   //state for add icon in Courses page
  const [addCoursesModal, setAddCoursesModal] = useState(false)

  //state for edit icon in Courses page
  const [editCoursesModal, setEditCoursesModal] = useState(false)

  //state for input value in Ingredient page
  const [inputList, setInputList] =  useState([
    { quantity: "", unit: "", ingredientAdd: "" },
    { quantity: "", unit: "", ingredientAdd: "" },
    { quantity: "", unit: "", ingredientAdd: "" },
  ]);

  
  const [userData, setUserData] = useState([])

  const [location, setLocation] = useState()


  ///FUNCTIONS///////////////////////////////////////////

  //this function is responsible for the inputs and updating the inputs
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


   //this function is responsible for toggling the sidebar in BaseTypePage
  const toggleHandler = () => {
    setToggle(!toggle);
  };

    //this function is responsible for the delete icon in BaseTypePage
  const DeleteBaseTypeModalHandler = () =>{
    setDeleteBaseTypeModal(!deleteBaseTypeModal)
  }

   //this function is responsible for the add icon in BaseTypePage
  const AddBaseTypeModalHandler = () =>{
   setAddBaseTypeModal(!addBaseTypeModal)
  }

  //this function is responsible for the edit icon in BaseTypePage
  const EditBaseTypeModalHandler = () =>{
    setEditBaseTypeModal(!editBaseTypeModal)
  }

    //this function is responsible for the delete icon in Courses page
  const DeleteCoursesModalHandler = () =>{
    setDeleteCoursesModal(!deleteCoursesModal)
  }

   //this function is responsible for the add icon in Courses page
  const AddCoursesModalHandler = () =>{
   setAddCoursesModal(!addCoursesModal)
  }

  //this function is responsible for the edit icon in Courses page
  const EditCoursesModalHandler = () =>{
    setEditCoursesModal(!editCoursesModal)
  }


  //this function is responsible for the the modal that shows with the sidebar
  const modalHandler = () =>{
    setShowModal(!showModal)
  }

  ///////////////////////////////////////////////////
  const context = {
    // input:input,
    // setInput:setInput,

    inputs:inputs,
    setInputs:setInputs,
    inputName:inputName,
    setInputName:setInputName,
    keyboard:keyboard,
    
    onChangeInput:onChangeInput,
    getInputValue:getInputValue,

  
    userName:userName,
    setUserName:setUserName,
    password:password,
    setPassword:setPassword,


      toggle : toggle,
      setToggle : setToggle,
      toggleHandler: toggleHandler,

      showModal :showModal,
      setShowModal : setShowModal,
      modalHandler : modalHandler,


      //add icon in baseType Page
      addBaseTypeModal :addBaseTypeModal,
     setAddBaseTypeModal :setAddBaseTypeModal,
     AddBaseTypeModalHandler :AddBaseTypeModalHandler,

     //edit icon in baseType Page
     editBaseTypeModal:editBaseTypeModal,
     setEditBaseTypeModal:setEditBaseTypeModal,
     EditBaseTypeModalHandler:EditBaseTypeModalHandler,

     //delete icon in baseType Page
     deleteBaseTypeModal:deleteBaseTypeModal,
      setDeleteBaseTypeModal:setDeleteBaseTypeModal,
      DeleteBaseTypeModalHandler :DeleteBaseTypeModalHandler,

      //add icon in courses Page
      addCoursesModal :addCoursesModal,
     setAddCoursesModal :setAddCoursesModal,
     AddCoursesModalHandler :AddCoursesModalHandler,

     //edit icon in courses Page
     editCoursesModal:editCoursesModal,
     setEditCoursesModal:setEditCoursesModal,
     EditCoursesModalHandler:EditCoursesModalHandler,

     //delete icon in courses Page
     deleteCoursesModal:deleteCoursesModal,
      setDeleteCoursesModal:setDeleteCoursesModal,
      DeleteCoursesModalHandler :DeleteCoursesModalHandler,


      userData:userData,
      setUserData:setUserData,
      location:location,
      setLocation:setLocation,

      inputList:inputList,
      setInputList:setInputList
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export default DataContext