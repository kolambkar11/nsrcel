import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FileService from "../../service/FileService";

export const files = createAsyncThunk("files-action", async (category) => {
  const filesResponse = FileService.getFiles();
  return (await filesResponse).data;
});

const fileSlice = createSlice({
  name: "files",
  initialState: {
    isFilesLoading: false,
    dataFiles: null,
    isErrorFiles: false,
  },
  extraReducers: (builder) => {
    builder.addCase(files.pending, (state, action) => {
      state.isFilesLoading = true;
    });

    builder.addCase(files.fulfilled, (state, action) => {
      state.isFilesLoading = false;
      state.dataFiles = action.payload;
    });

    builder.addCase(files.rejected, (state, action) => {
      state.isErrorFiles = true;
    });
  },
});

export default fileSlice.reducer;
