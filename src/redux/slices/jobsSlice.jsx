import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getjobs = createAsyncThunk(
  "jobs/getJobs",
  async ({ company, search }, thunkAPI) => {
    try {
      let url = "https://remotive.com/api/remote-jobs";

      if (company) {
        url += `?company_name=${encodeURIComponent(company)}`;
      }
      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  filters: {
    company: "",
    search: "",
    jobtype: "",
  },
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setCompany(state, action) {
      state.filters.company = action.payload;
    },
    setSearch(state, action) {
      state.filters.search = action.payload;
    },
    setJobType(state, action) {
      state.filters.jobtype = action.payload;
    },
    clearFilters(state) {
      state.filters = {
        company: "",
        search: "",
        jobtype: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getjobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getjobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(getjobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setJobs, setCompany, setSearch, setJobType, clearFilters } =
  jobsSlice.actions;
export default jobsSlice.reducer;
