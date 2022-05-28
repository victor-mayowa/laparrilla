import React, { useState } from "react";
import Ingredient from "./Ingredient";
import TextEditor from "./TextEditor";

const EditBarPageBody = () => {
  const [recipesName, setRecipesName] = useState("");
  const [comments, setComments] = useState("");
  const [recipesType, setRecipesType] = useState("");
  const [drinkType, setDrinkType] = useState("");
  const [system, setSystem] = useState("");
  const [youtube, setYoutube] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      recipesName,
      recipesType,
      comments,
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
              placeholder="enter username"
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
              onChange={(e) => {
                const selected = e.target.value;
                setRecipesType(selected);
              }}
            >
              <option value="bar">Bar</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="mr-9 inline-block w-[150px]">Drink Type</label>
            <select
              className="py-1 pl-2 w-[100px] border-[1px] border-slate-600 rounded-lg"
              value={drinkType}
              onChange={(e) => {
                const selected = e.target.value;
                setDrinkType(selected);
              }}
            >
              <option value="Bulk">Bulk</option>
              <option value="Margaritas">Margaritas</option>
              <option value="Martinis">Martinis</option>
              <option value="Mixed Drinks">Mixed Drinks</option>
              <option value="Mojito">Mojito</option>
              <option value="shooters">shooters</option>
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

          <div className="py-6 px-2 border-[1px] border-slate-500 my-6">
            <div className="mb-6 ">
              <input
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
              onChange={(e) => {
                const selected = e.target.value;
                setSystem(selected);
              }}
            >
              <option value="US">Us</option>
              <option value="Metric">Metric</option>
            </select>
          </div>

          <Ingredient/>
          <TextEditor />

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

export default EditBarPageBody;
