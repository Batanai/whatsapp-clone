import React, { createContext, useContext, useReducer } from "react";

//DATA LAYER
export const StateContext = createContext();

//BUILD PROVIDER
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//USE INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext);
