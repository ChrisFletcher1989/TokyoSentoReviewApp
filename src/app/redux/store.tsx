"use client";
import { configureStore } from "@reduxjs/toolkit";
import { adachiReducer } from "./features/区s/adachi";
import { searchResultsReducer } from "./features/searchResults";
import { arakawaReducer } from "./features/区s/arakawa";

const store = configureStore({
  reducer: {
    adachi: adachiReducer,
    arakawa: arakawaReducer,
    searchResults: searchResultsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
