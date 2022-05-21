import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  
  const [userData, setUserData] = useState([])

  const [location, setLocation] = useState()

  const toggleHandler = () => {
    setToggle(!toggle);
  
  };

  const context = {
      toggle : toggle,
      setToggle : setToggle,
      toggleHandler: toggleHandler,
      userData:userData,
      setUserData:setUserData,
      location:location,
      setLocation:setLocation,
  }

  return <DataContext.Provider value={context}>{children}</DataContext.Provider>;
};

export default DataContext