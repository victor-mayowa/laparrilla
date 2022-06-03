import React, { useContext, useRef, useState } from "react";
import DataContext from "../store/storeContext";
import { AiOutlineClose } from "react-icons/ai";
import Draggable from "react-draggable";

const EditBaseType = () => {
  const dataCtx = useContext(DataContext);

  const showEditModal = dataCtx.showEditModal;

  const closeEditModalHandler = dataCtx.closeEditModalHandler;

  const modal = useRef();

  const closeModal = (e) => {
    if (modal.current === e.target) {
      closeEditModalHandler();
    }
  }

  const [formInput, setFormInput] = useState("")

  const closeButtonHandler = () =>{
    closeEditModalHandler();
  }
  const openButtonHandler = () =>{
    console.log("open")
    console.log(formInput)
  }
  const formHandler = (e) =>{
    e.preventDefault()
    console.log("formHandler")
  }


  return (
    <div
      ref={modal}
      className={
        showEditModal.show
          ? "h-[100vh] fixed z-50 bg-[rgba(0,0,0,0.64)] w-full flex items-center justify-center"
          : "hidden"
      }
      onClick={closeModal}
    >
      <Draggable>

      <div className="bg-white w-[500px] h-[180px] rounded-lg relative cursor-move">
        <div className="">
          <div className="bg-slate-300 flex items-center justify-between w-full p-1 mb-4 rounded-t-lg px-2">
            <h1 className="font-bold font-poppins">Base Type</h1>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={closeEditModalHandler}
              size={20}
            />
          </div>

          <form className="flex flex-col" onSubmit={formHandler}>
            <div className="px-5 flex items-center justify-between mb-8">
              <label className="text-[14px]">Name:</label>
              <input
                className="py-1 pl-2 w-[300px] border-[1px] border-slate-600 rounded-sm"
                type="text" value={formInput} onChange={(e)=>{
                  setFormInput(e.target.value)
                }}
              />
            </div>

            <div className="w-full h-[1px] bg-black"></div>

            <div className="flex justify-end my-4 mr-2">
              <button onClick={openButtonHandler} className="mr-2 bg-gray-800 text-white px-4 py-1 rounded-sm cursor-pointer hover:bg-gray-700">Save</button>
              <button onClick={closeButtonHandler} className="bg-red-600 text-white px-4 py-1 rounded-sm cursor-pointer hover:bg-red-500 ">Close</button>
            </div>
          </form>
        </div>
      </div>
      </Draggable>
     
    </div>
  );
};

export default EditBaseType;
