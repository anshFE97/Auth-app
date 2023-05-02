import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from './uploadService'

const initialState = {
    url: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const createUpload = createAsyncThunk(
    "upload/create",
    async (formData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token;
        return await uploadService.createProfile(formData, token);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        return thunkAPI.rejectWithValue(message);
      }
    }
  );

export const uploadSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
      resetUrl: (state) => {
        (url = ""),
          (state.isLoading = false),
          (state.isError = false),
          (state.isSuccess = false),
          (state.message = "");
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(createUpload.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(createUpload.fulfilled, (state, action) => {
            (state.isLoading = false),
              (state.isSuccess = true),
              (state.url = action.payload);
          })
          .addCase(createUpload.rejected, (state, action) => {
            (state.isLoading = false),
              (state.isError = true),
              (state.message = action.payload);
          })
        }
})

export const { resetUrl } = uploadSlice.actions;
export default uploadSlice.reducer;