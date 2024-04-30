import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../config";
import axios from 'axios';
const initialState = {
movieList:null,
};

export const getAllMovies = createAsyncThunk(
  "movie/getAllMovies",
  async () => {
    const res = await axios.get(apiUrls.getMovies);
    const result = await res.data.data;
    return result;
  }
);
export const AddMovies = createAsyncThunk(
  "movie/AddMovies",
  async (data) => {
    console.log(data)
    const res = await axios.post(apiUrls.addMovies,data);
    const result = await res.data.data;
    return result;
  }
);


export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder.addCase(getAllMovies.fulfilled, (state, action) => {
        state.movieList =action.payload
    });
   
  },
});


export const movieReducer =
  moviesSlice.reducer;