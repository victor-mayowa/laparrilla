import React from "react";
import Backdrop from "./Components/Pages/Backdrop";
import AllRecipes from "./Components/Pages/AllRecipes";
import Navbar from "./Components/Pages/Navbar";
import Sidebar from "./Components/Pages/Sidebar";
import { DataContextProvider } from "./Components/store/storeContext";

function App() {
  return (
    <DataContextProvider>
      <div className="bg-[#B7B8B9] relative">
        <Navbar />
        <Sidebar />
        <Backdrop />
        <AllRecipes />
      </div>
    </DataContextProvider>
  );
}

export default App;
