import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice } from "../slices/jobsSlice";
import savedSlice from "../slices/savedSlice";

export const store = configureStore({
  reducer: {
    jobsSlice: jobsSlice.reducer,
    savedSlice: savedSlice,
  },
});
