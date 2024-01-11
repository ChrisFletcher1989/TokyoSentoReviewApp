"use client";
import { createSlice } from "@reduxjs/toolkit";
//CREATE INITIAL STATE
const initialState = {
  adachiSelected: false,
};
const adachiSlice = createSlice({
  name: "adachi",
  initialState: initialState,
  reducers: {
    adachiSelected: (state) => {
      state.adachiSelected = true;
    },
  },
});

export const { adachiSelected } = adachiSlice.actions;
export const adachiReducer = adachiSlice.reducer;
