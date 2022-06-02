import React, { createContext, useRef, useState } from "react";
import UsersData from "../Data/UsersData";
import AllRecipesData from "../Data/AllRecipesData";
import BarData from "../Data/BarData"
import {useNavigate} from "react-router-dom"

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const navigate = useNavigate()






  ///Auth/////////////////////////////////////////////////////////
const [isAuth, setIsAuth] = useState(false)
/////////////////////////////////////////////////////////////////

///USER DETAIL//////////////////////////////////////////////////
const [data, setData ] = useState({})

///KEYBOARD////////////////////////////////////////////////
  ///states from keyBoard components 
  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState("UserName")
  const keyboard = useRef()
  /////////////////////////////////////////////

///LOGIN///////////////////////////////////////
  //state for inputs in login page
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

// ///////////////////////////////////////////////


///SIDEBAR//////////////////////////////////
///states for sideBar
  const [toggle, setToggle] = useState(true);

///FUNCTION
   //this function is responsible for toggling the sidebar
   const toggleHandler = () => {
    setToggle(!toggle);
  };
////////////////////////////////////////////////////////


///USERS DELETE MODAL//////////////////////////////////////////////////////////////////////////
///States
///state for usersData
const [userData, setUserData] = useState(UsersData)

const [showModal, setShowModal] = useState({
    show:false,
    id:null
  })

//FUNCTIONS
  ///for opening the modal
  const deleteHandler = (id) =>{
    setShowModal({
      show:(!showModal.show),
      id,
    })
    console.log(id)
  }

/// function for deleting an item after clicking Yes
const deleteAfterModalHandler = () =>{
  if(showModal.show && showModal.id){
    const notDeleteUser = userData.filter((user)=> user.id !== showModal.id)
    setUserData(notDeleteUser)
    setShowModal({
      show:(!showModal.show),
      id:null
    })
  }
  navigate("/users")
}

///function for closing the modal 
const closeModal = () =>{
  setShowModal({
    show:(!showModal.show),
  })
}
////////////////////////////////////////////////////////////////////////////

///LOGOUT MODAL/////////////////////////////////////////////////////////////
const [openModal, setOpenModal] = useState(false)

//function
const openModalHandler = () =>{
  setOpenModal(!openModal)
}

const confirmLogoutHandler = () =>{
  navigate("/")
  setOpenModal(!openModal)
  setToggle(!toggle);
}
//////////////////////////////////////////////////////////////////

///ALL RECIPES DELETE MODAL////////////////////////////////////////////////
const [allRecipes, setAllRecipes] = useState(AllRecipesData)

/// function for deleting an item after clicking Yes
const confirmAllRecipeDelete = () =>{
  if(showModal.show && showModal.id){
    const notDeleteRecipe = allRecipes.filter((recipe)=> recipe.id !== showModal.id)
    setAllRecipes(notDeleteRecipe)
    setShowModal({
      show:(!showModal.show),
      id:null
    })
  }
  navigate("/allrecipes")
}
////////////////////////////////////////////////////////////////

///BAR RECIPES DELETE MODAL///////////////////////////////////////////////////
const [barRecipes, setBarRecipes] = useState(BarData)

/// function for deleting an item after clicking Yes
const confirmBarRecipeDelete = () =>{
  if(showModal.show && showModal.id){
    // console.log("Fff")
    const notDeleteBarRecipe = barRecipes.filter((recipe)=> recipe.id !== showModal.id)
    setBarRecipes(notDeleteBarRecipe)
    setShowModal({
      show:(!showModal.show),
      id:null
    })
  }
  navigate("/barrecipes")
}















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

  


  const [location, setLocation] = useState()


  
  ///FUNCTIONS///////////////////////////////////////////

 

  

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


  

  //CONTEXT/////////////////////////////////////////////////
  const context = {
    data:data,
    setData:setData,
    //Auth//////////////////////////////////////////////////////////
   isAuth:isAuth,
   setIsAuth:setIsAuth,

    ///KEYBOARD///////////////////////////////////////////////////////////////
    inputs:inputs,
    setInputs:setInputs,
    inputName:inputName,
    setInputName:setInputName,
    keyboard:keyboard,
    //////////////////////////////////////////////////////////////////////////
    

  
    userName:userName,
    setUserName:setUserName,
    password:password,
    setPassword:setPassword,

///SIDEBAR////////////////////////////////////////
      toggle : toggle,
      setToggle : setToggle,
      toggleHandler: toggleHandler,
///////////////////////////////////////////////////////

///LOGOUT MODAL///////////////////////////////////////
      openModal:openModal,
      setOpenModal:setOpenModal,
      openModalHandler:openModalHandler,
     confirmLogoutHandler,

///USERS///////////////////////////////////////////
      userData:userData,
      setUserData:setUserData,
      showModal :showModal,
      setShowModal : setShowModal,
      deleteHandler : deleteHandler,
      deleteAfterModalHandler:deleteAfterModalHandler,
      closeModal:closeModal,
///////////////////////////////////////////////////////////

///ALL RECIPES MODAL //////////////////////////////////////
allRecipes:allRecipes,
setAllRecipes:setAllRecipes,
confirmAllRecipeDelete:confirmAllRecipeDelete,

///BAR RECIPES///////////////////////////////////////////////////
barRecipes:barRecipes,
setBarRecipes:setBarRecipes,
confirmBarRecipeDelete:confirmBarRecipeDelete,







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


     
      location:location,
      setLocation:setLocation,

      inputList:inputList,
      setInputList:setInputList
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export default DataContext