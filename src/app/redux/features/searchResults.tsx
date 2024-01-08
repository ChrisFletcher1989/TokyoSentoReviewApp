import { createSlice } from "@reduxjs/toolkit";

interface Sentos {
  name: string;
  rating: number;
  station: string;
  address: string;
}

// Define the type for your state
interface SearchResultsState {
  searchResults: Sentos[];
}

//CREATE INITIAL STATE
const initialState: SearchResultsState = {
  searchResults: [],
};
//ACTIONS ARE AUTOMATICALLY MADE WHEN REDUCERS ARE ADDED TO THE OBJECT USING createSlice TOOLKIT
const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: initialState,
  reducers: {
    addSentos: (state, action) => {
      state.searchResults.push(action.payload);
    },
  },
});

export const searchResultsReducer = searchResultsSlice.reducer;
export const { addSentos } = searchResultsSlice.actions;
