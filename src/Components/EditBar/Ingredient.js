import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";
import { MdOutlineAddBox } from "react-icons/md";

const Ingredient = () => {
  const [inputList, setInputList] = useState([
    { quantity: "", unit: "", ingredientAdd: "" },
    { quantity: "", unit: "", ingredientAdd: "" },
    { quantity: "", unit: "", ingredientAdd: "" },
  ]);

  const addHandler = () => {
    setInputList([...inputList, { quantity: "", unit: "", IngredientAdd: "" }]);
  };

  const deleteHandler = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const changeHandler = (index, e) => {
    const {value, name} = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  };

  console.log(inputList)

  return (
    <div className="bg-red p-4 border-[2px] mb-6">
      {inputList.map((list, index) => {
        return (
          <div
            key={index}
            className="bg-[#CEDBE1] flex max-w-[1000px] justify-between items-center mx-auto px-10 py-5 shadow-lg mb-8"
          >
            <div className=" text-center">
              <p className="text-[16px] font-light mb-4">Quantity{index}</p>
              <input className="w-[60px]" name="quantity" type="number" value={list.quantity} onChange={(e)=>{
                changeHandler(index,e)
              }} />
            </div>

            <div className=" text-center">
              <p className="text-[16px] font-light mb-4">Units</p>
              <select name="unit" value={list.unit} onChange={(e)=>{
                changeHandler(index, e)
              }}>
                <option value="Bunch">Bunch</option>
                <option value="Can">Can</option>
                <option value="Cartoon">Cartoon</option>
                <option value="Centigram">Centigram</option>
                <option value="Centiliters">Centiliters</option>
                <option value="Clove">Clove</option>
              </select>
            </div>

            <div className=" text-center ">
              <p className="text-[16px] mb-4 font-light">Ingredient add</p>
              <input type="text" name="ingredientAdd" value={ list.ingredientAdd} onChange={(e)=>{
                changeHandler(index,e)
              }} />
            </div>

            <div className="text-center ">
              <p className="text-[16px] mb-4  font-light">Actions</p>
              <div className="flex justify-center items-center">
                {inputList.length - 1 === index ? (
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

export default Ingredient;
