import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {

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




  
  const [userData, setUserData] = useState([])

  const [location, setLocation] = useState()

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
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export default DataContext