import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const useTheme = () => {
  return useContext(StateContext);
};

export const StateProvider = ({ children }) => {
  const [statusMessage, setStatusMessage] = useState("");
  return (
    <StateContext.Provider value={{ statusMessage, setStatusMessage }}>
      {children}
    </StateContext.Provider>
  );
};
