import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state, action) => {
     
      return {
        ...state,
        mode: !state.mode,
      };
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
