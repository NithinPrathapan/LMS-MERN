import React, { createContext, useReducer } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const currency=import.meta.env.VITE_CURRENCY
  const value={
    currency
  }
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
