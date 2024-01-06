import { configureStore } from "@reduxjs/toolkit";
import { adachiReducer } from "./features/区s/adachi";

const store = configureStore({
  reducer: {
    adachiReducer: adachiReducer,
  },
});

module.exports = store;
