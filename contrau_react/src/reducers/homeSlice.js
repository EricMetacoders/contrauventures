import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeServices } from "../services/homeServices";

const initialState = {
  faqList: null,
  partners: null,
  founders: null,
  portfolios: null,
  news: null,
  empower: null,
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
      })
      .addCase(getPartnersList.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getFounderList.fulfilled, (state, action) => {
        state.founders = action.payload;
      })
      .addCase(getFounderList.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getPortfolioList.fulfilled, (state, action) => {
        state.portfolios = action.payload;
      })
      .addCase(getPortfolioList.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getNewsList.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(getNewsList.rejected, (state, action) => {
        console.log("error");
      })
      .addCase(getEmpowerList.fulfilled, (state, action) => {
        state.empowers = action.payload;
      })
      .addCase(getEmpowerList.rejected, (state, action) => {
        console.log("error");
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

export const getFounderList = createAsyncThunk("getFounderList", async () => {
  const response = await homeServices.getFounderList();
  console.log("data", response.data);
  return response.data;
});

export const getPortfolioList = createAsyncThunk(
  "getPortfolioList",
  async () => {
    const response = await homeServices.getPortfolioList();
    console.log("data", response.data);
    return response.data;
  }
);

export const getNewsList = createAsyncThunk("getNewsList", async () => {
  const response = await homeServices.getNewsList();
  return response.data;
});

export const getEmpowerList = createAsyncThunk("getEmpowerList", async () => {
  const response = await homeServices.getEmpowerList();
  return response.data;
});
