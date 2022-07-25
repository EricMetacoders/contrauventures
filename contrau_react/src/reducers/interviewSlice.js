import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { interviewServices } from "../services/interviewService";
const initialState = {
  listFounder: null,
};
const interviewSlice = createSlice({
  name: "Interview Slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListFounder.fulfilled, (state, action) => {
        state.listFounder = action.payload;
      })
      .addCase(getListFounder.rejected, (state, action) => {
        console.log("error");
      });
  },
});
export default interviewSlice.reducer;

export const getListFounder = createAsyncThunk("getListFounder", async () => {
  const response = await interviewServices.getListFounder();
  console.log('response:', response)
  return response.data;

});

// export const { ccc } = interviewSlice.actions;
