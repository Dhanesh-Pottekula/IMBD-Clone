import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../config";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";
const initialState = {
  movieList: null,
  onAddMovieSuccess: false,
  movieData: null,
};

export const getAllMovies = createAsyncThunk("movie/getAllMovies", async () => {
  const res = await axiosInstance.get(apiUrls.getMovies);
  const result = await res.data.data;
  return result;
});
export const getMovieById = createAsyncThunk(
  "movie/getMovieById",
  async (data) => {
    const res = await axiosInstance.post(apiUrls.getMovieById, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.data.data;
    return result;
  }
);
export const editMovie = createAsyncThunk(
  "movie/editMovie",
  async ({data,id}) => {

    const res = await axiosInstance.put(`${apiUrls.editMovieById} ${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.data.data;
    return result;
  }
);
export const AddMovies = createAsyncThunk("movie/AddMovies", async (data) => {
  const res = await axiosInstance.post(apiUrls.addMovies, data);
  const result = await res.data.data;
  return result;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });

    builder.addCase(AddMovies.pending, (state, action) => {
      state.onAddMovieSuccess = false;
    });
    builder.addCase(AddMovies.fulfilled, (state, action) => {
      state.onAddMovieSuccess = true;
    });
    
    builder.addCase(editMovie.pending, (state, action) => {
      state.onAddMovieSuccess = false;
    });
    builder.addCase(editMovie.fulfilled, (state, action) => {
      state.onAddMovieSuccess = true;
    });

    builder.addCase(getMovieById.fulfilled, (state, action) => {
      state.movieData = action.payload;
    });
  },
});

export const movieReducer = moviesSlice.reducer;
