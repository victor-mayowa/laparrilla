import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRecipes from "./Components/Pages/AllRecipes";
import AddRecipes from "./Components/Pages/AddRecipes";
import { DataContextProvider } from "./Components/store/storeContext";
import Layout from "./Components/Layout/Layout";
import RecipePage from "./Components/Pages/RecipePage";
import BarRecipes from "./Components/Pages/BarRecipes";

function App() {
  return (
    <div className="bg-[#B7B8B9] relative">
      <DataContextProvider>
        <Router>
          <Layout />
          <Routes>
          <Route path="/" element={<AllRecipes/>} />
          <Route path="/addrecipes" element={<AddRecipes/>}/>
          <Route path="/recipepage" element={<RecipePage/>}/>
          <Route path="/barrecipes" element={<BarRecipes/>}/>
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
