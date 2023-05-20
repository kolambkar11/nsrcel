import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../store/slices/CategorySlice";
import fileSlice from "../store/slices/FilesSlice";
const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    files: fileSlice,
  },
});
export default store;
