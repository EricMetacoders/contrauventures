import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeServices } from "../services/homeServices";

const initialState = {
  list: null,
};

const homeSlice = createSlice({
  name: "Home Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});
// export const { getList } = homeSlice.actions;
export default homeSlice.reducer;

export const getList = createAsyncThunk("getList", async () => {
  const response = await homeServices.getList();
  return response.data;
});
