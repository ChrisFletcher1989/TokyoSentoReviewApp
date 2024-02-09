"use client";
import { createSlice } from "@reduxjs/toolkit";
//CREATE INITIAL STATE
const initialState = {
  arakawaSelected: false,
};
const arakawaSlice = createSlice({
  name: "arakawa",
  initialState: initialState,
  reducers: {
    arakawaSelected: (state) => {
      state.arakawaSelected = true;
    },
  },
});

export const { arakawaSelected } = arakawaSlice.actions;
export const arakawaReducer = arakawaSlice.reducer;
