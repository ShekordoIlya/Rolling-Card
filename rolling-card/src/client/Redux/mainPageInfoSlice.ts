import { createSlice } from "@reduxjs/toolkit";

const mainPageInfoSlice = createSlice({
  name: "mainPage",
  initialState: {
    data: "",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = mainPageInfoSlice.actions;
export default mainPageInfoSlice.reducer;
