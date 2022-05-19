import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  
  };

  const context = {
      toggle : toggle,
      setToggle : setToggle,
      toggleHandler: toggleHandler


  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export default DataContext