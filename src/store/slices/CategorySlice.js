import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../service/CategoryService";

export const cate = createAsyncThunk("categories-action", async (category) => {
  const otpResponse = CategoryService.getCategories();
  return (await otpResponse).data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    isCategoriesLoading: false,
    dataCategories: null,
    isErrorCategories: false,
  },
  extraReducers: (builder) => {
    builder.addCase(cate.pending, (state, action) => {
      state.isCategoriesLoading = true;
    });

    builder.addCase(cate.fulfilled, (state, action) => {
      state.isCategoriesLoading = false;
      state.dataCategories = action.payload;
    });

    builder.addCase(cate.rejected, (state, action) => {
      state.isErrorCategories = true;
    });
  },
});

export default categorySlice.reducer;
