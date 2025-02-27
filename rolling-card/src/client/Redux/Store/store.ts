import { configureStore } from "@reduxjs/toolkit";
import mainPageInfoSlice from "../mainPageInfoSlice";

export default configureStore({
  reducer: {
    mainPageStore: mainPageInfoSlice,
  },
});
