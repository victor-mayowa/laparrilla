import React from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { MdOutlineAddBox } from "react-icons/md";
import { useContext } from "react";
import DataContext from "../store/storeContext";

const IngredientKitchen = () => {
  
  const dataCtx = useContext(DataContext)
  const kitchenInputList = dataCtx.kitchenInputList
  const setKitchenInputList = dataCtx.setKitchenInputList


  const addHandler = () => {
    setKitchenInputList([...kitchenInputList, { quantity: "", unit: "", IngredientAdd: "" }]);
  };

  const deleteHandler = (index) => {
    const list = [...kitchenInputList];
    list.splice(index, 1);
    setKitchenInputList(list);
  };

  const changeHandler = (index, e) => {
    const {value, name} = e.target
    const list = [...kitchenInputList]
    list[index][name] = value
    setKitchenInputList(list)
  };

  // console.log(inputList)

  return (
    <div className="bg-red p-4 border-[2px] mb-6">
      {kitchenInputList.map((list, index) => {
        return (
          <div
            key={index}
            className="bg-[#CEDBE1] flex max-w-[1000px] justify-between items-center mx-auto px-10 py-5 shadow-lg mb-8"
          >
            <div className=" text-center">
              <p className="text-[16px] font-light mb-4">Quantity</p>
              <input className="w-[60px] h-9" name="quantity" type="number" value={list.quantity} onChange={(e)=>{
                changeHandler(index,e)
              }} />
            </div>

            <div className=" text-center">
              <p className="text-[16px] font-light mb-4">Units</p>
              <select className="h-9" name="unit" value={list.unit} onChange={(e)=>{
                changeHandler(index, e)
              }}>
                <option value="">Select a unit</option>
                <option value="Bunch">Bunch</option>
                <option value="Can">Can</option>
                <option value="Cartoon">Cartoon</option>
                <option value="Centigram">Centigram</option>
                <option value="Centiliters">Centiliters</option>
                <option value="Clove">Clove</option>
                <option value="Kilogram">Kilogram</option>
              </select>
            </div>

            <div className=" text-center ">
              <p className="text-[16px] mb-4 font-light">Ingredient add</p>
              <input className="h-9 w-[200px]" type="text" name="ingredientAdd" value={ list.ingredientAdd ?? ""}  onChange={(e)=>{
                changeHandler(index,e)
              }} />
            </div>

            <div className="text-center ">
              <p className="text-[16px] mb-4  font-light">Actions</p>
              <div className="flex justify-center items-center">
                {kitchenInputList.length - 1 === index ? (
                  <MdOutlineAddBox
                    onClick={addHandler}
                    size={22}
                    className="text-[#07335E] cursor-pointer hover:text-[#07335eb4]"
                  />
                ) : (
                  <TrashIcon
                    onClick={() => deleteHandler(index)}
                    size={10}
                    className="w-6 text-[#8A1818] cursor-pointer mr-1 hover:text-[#8a1818d7]"
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IngredientKitchen;
