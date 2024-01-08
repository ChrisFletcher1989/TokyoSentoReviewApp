import { configureStore } from "@reduxjs/toolkit";
import { adachiReducer } from "./features/区s/adachi";
import { searchResultsReducer } from "./features/searchResults";

const store = configureStore({
  reducer: {
    adachiReducer: adachiReducer,
    searchResultsReducer: searchResultsReducer,
  },
});

export default store;
