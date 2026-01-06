import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedJobs: [],
  loading: false,
  error: null,
};

const savedSlice = createSlice({
  name: "saved jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      const existJob = state.savedJobs.some((j) => j.id === action.payload.id);
      if (!existJob) {
        return {
          ...state,
          savedJobs: [...state.savedJobs, action.payload],
        };
      }
      return state;
    },
    removeJob: (state, action) => ({
      ...state,
      savedJobs: state.savedJobs.filter((j) => j.id !== action.payload),
    }),
  },
});

export const { addJob, removeJob } = savedSlice.actions;
export default savedSlice.reducer;
