import React, { createContext, useRef, useState } from "react";
import UsersData from "../Data/UsersData";
import AllRecipesData from "../Data/AllRecipesData";
import BarData from "../Data/BarData";
import KitchenData from "../Data/KitchenData";
import CoursesData from "../Data/CoursesData";
import BaseTypeData from "../Data/BaseTypeData";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const navigate = useNavigate();

  ///MORE ACTION DROP DOWN//////////////////////////////
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  ///Auth/////////////////////////////////////////////////////////
  const [isAuth, setIsAuth] = useState(false);

  ///USER DETAIL//////////////////////////////////////////////////
  const [data, setData] = useState({});

  ///KEYBOARD////////////////////////////////////////////////
  ///states from keyBoard components
  const initialValues = { userName: "", password: "" };
  const [inputs, setInputs] = useState(initialValues);
  const [inputName, setInputName] = useState("userName");
  const keyboard = useRef();

  ///LOGIN///////////////////////////////////////
  //state for inputs in login page
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  ///DELETE MODAL HANDLER////////////////////////////////////
  const [showModal, setShowModal] = useState({
    show: false,
    id: null,
  });
  ///for opening the modal
  const showModalHandler = (id) => {
    console.log(id);
    setShowModal({
      show: !showModal.show,
      id,
    });
  };
  ///function for closing the modal
  const closeModalHandler = () => {
    setShowModal({
      show: !showModal.show,
    });
  };

  ///EDIT MODAL HANDLER///////////////////////////////////////
  const [showEditModal, setShowEditModal] = useState({
    show: false,
    id: null,
  });
  ///for opening the modal
  const showEditModalHandler = (id) => {
    setShowEditModal({
      show: !showEditModal.show,
      id,
    });
  };
  ///function for closing the modal
  const closeEditModalHandler = () => {
    setShowEditModal({
      show: !showEditModal.show,
    });
  };

  ///ADD MODAL HANDLER///////////////////////////////////////
  //state for add icon in Courses page
  const [addCoursesModal, setAddCoursesModal] = useState({
    show: false,
    id: null,
  });
  //state for add icon in baseType page
  const [addBaseTypeModal, setAddBaseTypeModal] = useState({
    show: false,
    id: null,
  });

  //this function is responsible for the add icon in Courses page
  const AddCoursesModalHandler = () => {
    setAddCoursesModal({ show: !addCoursesModal.show });
  };
  //this function is responsible for the add icon in BaseTypePage
  const AddBaseTypeModalHandler = () => {
    setAddBaseTypeModal({ show: !addBaseTypeModal.show });
  };

  ///SIDEBAR/////////////////////////////////////////////////
  ///states for sideBar
  const [toggle, setToggle] = useState(true);
  //this function is responsible for toggling the sidebar
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  ///LOGOUT MODAL/////////////////////////////////////////////////
  const [openModal, setOpenModal] = useState(false);
  //function
  const openModalHandler = () => {
    setOpenModal(!openModal);
  };
  const confirmLogoutHandler = () => {
    navigate("/");
    setOpenModal(!openModal);
    setToggle(!toggle);
  };

  ///ALL RECIPES DELETE MODAL/////////////////////////////////////
  const [allRecipes, setAllRecipes] = useState(AllRecipesData);
  /// function for deleting an item after clicking Yes
  const confirmAllRecipeDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteRecipe = allRecipes.filter(
        (recipe) => recipe.id !== showModal.id
      );
      setAllRecipes(notDeleteRecipe);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/allrecipes");
  };

  ///BAR RECIPES DELETE MODAL/////////////////////////////////////
  const [barRecipes, setBarRecipes] = useState(BarData);
  /// function for deleting an item after clicking Yes
  const confirmBarRecipeDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteBarRecipe = barRecipes.filter(
        (recipe) => recipe.id !== showModal.id
      );
      setBarRecipes(notDeleteBarRecipe);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/barrecipes");
  };

  ///KITCHEN DELETE MODAL/////////////////////////////////////////
  const [kitchenRecipes, setKitchenRecipes] = useState(KitchenData);
  /// function for deleting an item after clicking Yes
  const confirmKitchenRecipeDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteKitchenRecipe = kitchenRecipes.filter(
        (recipe) => recipe.id !== showModal.id
      );
      setKitchenRecipes(notDeleteKitchenRecipe);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/kitchenrecipes");
  };

  ///USERS DELETE MODAL///////////////////////////////////////////
  const [userData, setUserData] = useState(UsersData);
  /// function for deleting an item after clicking Yes
  const confirmUserDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteUser = userData.filter((user) => user.id !== showModal.id);
      setUserData(notDeleteUser);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/users");
  };

  ///COURSE DATA////////////////////////////////////////////////
  const [coursesData, setCoursesData] = useState(CoursesData);
  //this function is responsible for the delete icon in Courses page
  const confirmCourseDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteCourses = coursesData.filter(
        (course) => course.id !== showModal.id
      );
      setCoursesData(notDeleteCourses);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/courses");
  };

  ///BASETYPE DATA/////////////////////////////////////////////
  const [baseTypeData, setBaseTypeData] = useState(BaseTypeData);
  //this function is responsible for the delete icon in Courses page
  const confirmBaseTypeDelete = () => {
    if (showModal.show && showModal.id) {
      const notDeleteBaseType = baseTypeData.filter(
        (baseType) => baseType.id !== showModal.id
      );
      setBaseTypeData(notDeleteBaseType);
      setShowModal({
        show: !showModal.show,
        id: null,
      });
    }
    navigate("/basetype");
  };

  //state for input value in Ingredient page
  const [barInputList, setBarInputList] = useState([
    { quantity: "", unit: "", ingredientAdd: "" },
  ]);

  const [kitchenInputList, setKitchenInputList] = useState([
    { quantity: "", unit: "", ingredientAdd: "" },
  ]);





  
  //CONTEXT/////////////////////////////////////////////////
  const context = {

    ///MORE ACTION DROP DOWN//////////////////////////////
    showDropDown: showDropDown,
    setShowDropDown: setShowDropDown,
    dropDownHandler: dropDownHandler,

    data: data,
    setData: setData,
    //Auth//////////////////////////////////////////////////////////
    isAuth: isAuth,
    setIsAuth: setIsAuth,

    ///KEYBOARD///////////////////////////////////////////////////////////////
    inputs: inputs,
    setInputs: setInputs,
    inputName: inputName,
    setInputName: setInputName,
    keyboard: keyboard,

    userName: userName,
    setUserName: setUserName,
    password: password,
    setPassword: setPassword,

    ///SIDEBAR////////////////////////////////////////
    toggle: toggle,
    setToggle: setToggle,
    toggleHandler: toggleHandler,

    ///MODAL///////////////////////////////////////////////
    showModal: showModal,
    setShowModal: setShowModal,
    showModalHandler: showModalHandler,
    closeModalHandler: closeModalHandler,

    ///LOGOUT MODAL///////////////////////////////////////
    openModal: openModal,
    setOpenModal: setOpenModal,
    openModalHandler: openModalHandler,
    confirmLogoutHandler,

    ///USERS///////////////////////////////////////////
    userData: userData,
    setUserData: setUserData,
    confirmUserDelete: confirmUserDelete,

    ///ALL RECIPES MODAL //////////////////////////////////////
    allRecipes: allRecipes,
    setAllRecipes: setAllRecipes,
    confirmAllRecipeDelete: confirmAllRecipeDelete,

    ///BAR RECIPES///////////////////////////////////////////////////
    barRecipes: barRecipes,
    setBarRecipes: setBarRecipes,
    confirmBarRecipeDelete: confirmBarRecipeDelete,

    ///KITCHEN DELETE MODAL/////////////////////////////////////////
    kitchenRecipes: kitchenRecipes,
    setKitchenRecipes: setKitchenRecipes,
    confirmKitchenRecipeDelete: confirmKitchenRecipeDelete,

    ///BASETYPE DATA/////////////////////////////////////////////
    baseTypeData: baseTypeData,
    setBaseTypeData: setBaseTypeData,
    confirmBaseTypeDelete: confirmBaseTypeDelete,

    ///COURSE DATA////////////////////////////////////////////////
    coursesData: coursesData,
    setCoursesData: setCoursesData,
    confirmCourseDelete: confirmCourseDelete,

    //add icon in baseType Page
    addBaseTypeModal: addBaseTypeModal,
    setAddBaseTypeModal: setAddBaseTypeModal,
    AddBaseTypeModalHandler: AddBaseTypeModalHandler,

    //add icon in courses Page
    addCoursesModal: addCoursesModal,
    setAddCoursesModal: setAddCoursesModal,
    AddCoursesModalHandler: AddCoursesModalHandler,

    ///EDIT MODAL HANDLER///////////////////////////////////////
    showEditModal: showEditModal,
    setShowEditModal: setShowEditModal,
    showEditModalHandler: showEditModalHandler,
    closeEditModalHandler: closeEditModalHandler,
    /////////////////////////////

    barInputList: barInputList,
    setBarInputList: setBarInputList,

    kitchenInputList: kitchenInputList,
    setKitchenInputList: setKitchenInputList,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};

export default DataContext;
