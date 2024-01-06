import { createSlice } from "@reduxjs/toolkit";
//CREATE INITIAL STATE
const initialState = {
  adachiSelected: false,
};
//ACTIONS ARE AUTOMATICALLY MADE WHEN REDUCERS ARE ADDED TO THE OBJECT USING createSlice TOOLKIT
const adachiSlice = createSlice({
  name: "adachi",
  initialState: initialState,
  reducers: {
    selected: (state) => {
      state.adachiSelected = true;
    },
  },
});

export const adachiReducer = adachiSlice.reducer;
export const { selected } = adachiSlice.actions;
