import React from "react";

const KitchenRecipeDetailBody = ({ user }) => {
  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4 ">
        <div className="mb-4">
          <p>
            Last Modified : <span className="font-light">22-04-08</span>
          </p>
          <p>
            User : <span className="font-light">{user}</span>
          </p>
          <p>
            Base Type : <span className="font-light"></span>
          </p>
          <p>
            Courses : <span className="font-light"></span>
          </p>
          <div>
            <div className="flex items-center">
            <p>
              Serving Size: <span className="font-light"></span>
            </p>
            <input className="ml-4 pl-2 mr-3 h-[50px] w-[100px] border-[1px] border-slate-600 rounded-sm" type="text" inputMode="numeric" />

            <button  className='bg-[#007A7A] py-2 px-5 rounded-sm text-white mr-3 text-[14px] hover:bg-[#0a8d8d]'>Refresh</button>
            
            <button  className='bg-[#007A7A] py-2 px-5 rounded-sm text-white  text-[14px] hover:bg-[#0a8d8d]'>Double it</button>
            </div>
            
          </div>
        </div>

        <div className="bg-[#D5E7EF] p-6 rounded-lg shadow-md mb-10">
          <h1 className="mb-5">Ingredient</h1>
          <ul className="px-4">
            <li className="font-light mb-1">1/2 LiterChopped Red Apple</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">
              1 LiterFresh Squeezed Orange Juice
            </li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">
              1 LiterFresh Squeezed Orange Juice
            </li>
          </ul>
        </div>

        <div className="bg-[#D5E7EF] p-6 rounded-lg shadow-md">
          <h1 className="mb-5">Ingredient</h1>
          <ul className="px-4">
            <li className="font-light mb-1">1/2 LiterChopped Red Apple</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">
              1 LiterFresh Squeezed Orange Juice
            </li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">
              1 LiterFresh Squeezed Orange Juice
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KitchenRecipeDetailBody;
