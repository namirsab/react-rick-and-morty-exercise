import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);

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
