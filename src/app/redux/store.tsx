"use client";
import { configureStore } from "@reduxjs/toolkit";
import { adachiReducer } from "./features/区s/adachi";
import { searchResultsReducer } from "./features/searchResults";

const store = configureStore({
  reducer: {
    adachi: adachiReducer,
    searchResults: searchResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
