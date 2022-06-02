import React, { useContext, useRef } from "react";
import DataContext from "../store/storeContext";

const BarRecipesModal = () => {
  const dataCtx = useContext(DataContext);

  const showModal = dataCtx.showModal;

  const closeModal = dataCtx.closeModal

  const confirmBarRecipeDelete = dataCtx.confirmBarRecipeDelete

  const modal = useRef()

  const modalHandler = (e) =>{
      if(modal.current === e.target ){
          closeModal()
      }
  }

  
  return (
    <div ref={modal}
      className={
        showModal.show
          ? "h-[100vh] fixed z-50 bg-[rgba(0,0,0,0.64)] w-full flex items-center justify-center cursor-pointer"
          : "hidden"
      }
      onClick={modalHandler}
    >
      <div className="bg-white rounded-lg relative">
          <button onClick={closeModal} className="px-4 py-1 absolute right-[15px] top-[10px]  rounded-lg ">X</button>
        <div className="w-[400px] h-[180px] p-2 flex flex-col justify-center items-center mt-3">
          <p>Are you sure you want to delete this?</p>
          <div className="mt-4">
            <button onClick={confirmBarRecipeDelete} className="bg-green-800 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-green-700 mr-8">
              Yes
            </button>
            <button onClick={closeModal} className="bg-red-800 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-red-700 ">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BarRecipesModal;
