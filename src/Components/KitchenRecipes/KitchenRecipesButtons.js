import React from "react";

const KitchenRecipesButtons = () => {
  return (
    <div className="max-w-[1240px] mx-auto bg-[#ffffff] flex flex-col pt-12 pb-3 items-center justify-center">
      <div className="mb-4">
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Salsas
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Carnes
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Sides
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Frijoles
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Emponizadosyharina
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Posters
        </button>
      </div>

      <div>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Vinagreta
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Otros
        </button>
        <button className="border-[2px] border-[#007A7A] py-2 px-5 rounded-md  text-[#007A7A] mr-3 text-[14px] hover:text-[#fff] hover:bg-[#0a8d8d] hover:border-[#0a8d8d] shadow-lg">
          Fritos
        </button>
      </div>
    </div>
  );
};

export default KitchenRecipesButtons;
