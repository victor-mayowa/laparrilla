import React from "react";



const BarRecipeDetailBody = ({user}) => {

  return (
    <div className=" max-w-[1240px] mx-auto bg-white">
      <div className="max-w-[1000px] mx-auto py-4 ">

        <div className="mb-4">
        <p>Last Modified : <span className="font-light">22-04-08</span></p>
        <p>User : <span className="font-light">{user}</span></p>
        </div>
      
        <div className="bg-[#D5E7EF] p-6 rounded-lg shadow-md mb-10">
          <h1 className="mb-5">Ingredient</h1>
          <ul className="px-4">
            <li className="font-light mb-1">1/2 LiterChopped Red Apple</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">1 LiterFresh Squeezed Orange Juice</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">1 LiterFresh Squeezed Orange Juice</li>
          </ul>
        </div>

        <div className="bg-[#D5E7EF] p-6 rounded-lg shadow-md">
          <h1 className="mb-5">Ingredient</h1>
          <ul className="px-4">
            <li className="font-light mb-1">1/2 LiterChopped Red Apple</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">1 LiterFresh Squeezed Orange Juice</li>
            <li className="font-light mb-1">1 LiterChopped Pineapple</li>
            <li className="font-light mb-1">1 LiterChopped Oranges</li>
            <li className="font-light mb-1">1 LiterFresh Squeezed Orange Juice</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default BarRecipeDetailBody;
