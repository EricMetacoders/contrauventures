import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeServices } from "../services/homeServices";

const initialState = {
  faqList: null,
  partners: null,
};

const homeSlice = createSlice({
  name: "Home Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFAQList.fulfilled, (state, action) => {
        state.faqList = action.payload;
      })
      .addCase(getFAQList.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getPartnersList.fulfilled, (state, action) => {
        state.partners = action.payload;
      });
  },
});
// export const { getList } = homeSlice.actions;
export default homeSlice.reducer;

export const getFAQList = createAsyncThunk("getFAQList", async () => {
  const response = await homeServices.getFAQList();
  return response.data;
});
export const getPartnersList = createAsyncThunk("getPartnersList", async () => {
  const response = await homeServices.getPartnersList();
  return response.data;
});
