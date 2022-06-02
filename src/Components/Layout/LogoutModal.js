import React, { useContext, useRef } from "react";
import DataContext from "../store/storeContext";

const LogoutModal = () => {
  const dataCtx = useContext(DataContext);

  const openModal = dataCtx.openModal;
  const openModalHandler = dataCtx.openModalHandler
  const confirmLogoutHandler = dataCtx.confirmLogoutHandler

//   const closeModal = dataCtx.closeModal

//   const deleteAfterModalHandler = dataCtx.deleteAfterModalHandler

  const modal = useRef()

  const modalHandler = (e) =>{
      if(modal.current === e.target ){
          openModalHandler()
      }
  }

  
  return (
    <div ref={modal} onClick={modalHandler}
      className= { openModal ? "h-[100vh] fixed z-50 bg-[rgba(0,0,0,0.64)] w-full flex items-center justify-center" : "hidden"  }
    >
      <div className="bg-white rounded-lg relative">
          <button onClick={openModalHandler} className="px-4 py-1 absolute right-[15px] top-[10px]  rounded-lg">X</button>
        <div className="w-[400px] h-[180px] p-2 flex flex-col justify-center items-center mt-3">
          <p>Are you sure you want to Logout?</p>
          <div className="mt-4">
            <button onClick={confirmLogoutHandler} className="bg-green-800 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-700 mr-8">
              Yes
            </button>
            <button onClick={openModalHandler} className="bg-red-800 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-red-700 ">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoutModal;
