import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { reducer } from "./Reducers";

const initialState = {
  heroSection: [],
  qualitiesList: [],
  categoryList: []
};

export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.any
};
