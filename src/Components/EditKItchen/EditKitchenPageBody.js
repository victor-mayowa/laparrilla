import React, { useState } from "react";
import IngredientKitchen from "./IngredientKitchen";
import { useContext } from "react";
import DataContext from "../store/storeContext";
import TextEditorKitchen from "./TextEditorKitchen";
import { convertToRaw } from "draft-js";

const EditKitchenPageBody = () => {
  const recipesTypes = ["kitchen"];
  const systems = ["Us", "Metric"];
  const courses = ["Salsas", "Carnes", "Sides", "Frijoles", "Otro", "Fritos"];
  const baseTypes = ["Beef", "Bread", "Egg", "Fruit", "Grain", "Lamb", "other"];

  const [recipesName, setRecipesName] = useState("");
  const [recipesType, setRecipesType] = useState("kitchen");
  const [comments, setComments] = useState("");
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [system, setSystem] = useState("Metric");
  const [course, setCourse] = useState("Salsas");
  const [baseType, setBaseType] = useState("Beef");
  const [servingStyle, setServingStyle] = useState("");

  const dataCtx = useContext(DataContext);
  const barInputList = dataCtx.barInputList;
  const editorState = dataCtx.editorState
  const kitchenEditorData = 
    convertToRaw(editorState.getCurrentContent()).blocks
  // const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()))

  const [youtube, setYoutube] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      recipesName,
      recipesType,
      comments,
      course,
      baseType,
      servingStyle,
      file,
      caption,
      system,
      barInputList,
      kitchenEditorData,
      youtube,
    };
    console.log(data);
  };

  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4">
        <form
          className=" max-w-[800px] flex flex-col pl-4"
          onSubmit={submitHandler}
        >
          <div className="mb-6">
            <label className="mr-9 inline-block  w-[150px]">Name</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="text"
              placeholder="enter name"
              value={recipesName}
              onChange={(e) => {
                setRecipesName(e.target.value);
              }}
            />
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Recipe Type</label>
            <select
              className="py-1 pl-2 w-[100px] border-[1px] border-slate-600 rounded-lg"
              value={recipesType}
              onChange={(e) =>
                setRecipesType(recipesTypes[e.target.selectedIndex])
              }
            >
              {recipesTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px] ">Comments</label>
            <textarea
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="text"
              value={comments}
              onChange={(e) => {
                setComments(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Courses</label>
            <select
              className="py-1 pl-2 w-[100px] border-[1px] border-slate-600 rounded-lg"
              value={course}
              onChange={(e) => setCourse(courses[e.target.selectedIndex])}
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">BaseType</label>
            <select
              className="py-1 pl-2 w-[100px] border-[1px] border-slate-600 rounded-lg"
              value={baseType}
              onChange={(e) => setBaseType(baseTypes[e.target.selectedIndex])}
            >
              {baseTypes.map((baseType) => (
                <option key={baseType} value={baseType}>
                  {baseType}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block  w-[150px]">Serving size</label>
            <input
              className="py-6 pl-2 w-[150px] border-[1px] border-slate-600 rounded-sm"
              type="number"
              value={servingStyle}
              onChange={(e) => {
                setServingStyle(e.target.value);
              }}
              inputMode="numeric"
            />
          </div>

          <div className="py-6 px-2 border-[1px] border-slate-500 my-6">
            <div className="mb-6 ">
            <label className="mr-9 inline-block  w-[150px]">Add Utensil</label>
              <input
                className="cursor-pointer"
                type="file"
                value={file}
                onChange={(e) => {
                  setFile(e.target.value);
                }}
              />
            </div>

            <div className="mb-6">
              <label className="mr-9 inline-block  w-[150px]">Caption</label>
              <input
                className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                type="text"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">System</label>
            <select
              className="py-1 pl-2 w-[100px] border-[1px] border-slate-600 rounded-lg"
              value={system}
              onChange={(e) => setSystem(systems[e.target.selectedIndex])}
            >
              {systems.map((system) => (
                <option key={system} value={system}>
                  {system}
                </option>
              ))}
            </select>
          </div>

          <IngredientKitchen />
          <TextEditorKitchen />

          <div className="mb-6">
            <label className="mr-9 inline-block  w-[150px]">Youtube Link</label>
            <input
              className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
              type="text"
              placeholder="enter username"
              value={youtube}
              onChange={(e) => {
                setYoutube(e.target.value);
              }}
            />
          </div>

          <div className="w-full flex md:items-center md:justify-center">
            <button
              className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 ml-4 mt-6 hover:bg-[#0a8d8d]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKitchenPageBody;
