import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeServices } from "../services/homeServices";

const initialState = {
  faqList: null,
};

const homeSlice = createSlice({
  name: "Home Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFaqList.fulfilled, (state, action) => {
      state.faqList = action.payload;
    });
  },
});
// export const { getList } = homeSlice.actions;
export default homeSlice.reducer;

export const getFaqList = createAsyncThunk("getFaqList", async () => {
  const response = await homeServices.getList();
  return response.data;
});
