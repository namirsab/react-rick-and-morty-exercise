import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  favourites: [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const addChartoFavourites = (character) => {
    dispatch({ type: "ADD_CHAR_TO_FAVOURITES", payload: character });
  };

  return (
    <GlobalContext.Provider
      value={{ favourites: state.favourites, addChartoFavourites }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
