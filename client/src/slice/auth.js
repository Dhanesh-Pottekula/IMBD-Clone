import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../config";
import axios from 'axios';
import Cookies from 'js-cookie';
import axiosInstance from "../services/axiosInstance";
const initialState = {
user:null

};

export const SignUp = createAsyncThunk(
  "auth/singUp",
  async (data) => {
    const res = await axiosInstance.post(apiUrls.signUp,data);
    const result = await res.data.data;
    return result;
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (data) => {
    const res = await axiosInstance.post(apiUrls.login,data);
    const token = await res.data.token;
  
    Cookies.set('token',token , { expires: 1 });
    window.location.href='/';
    return token;
  }
);



export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder.addCase(SignUp.fulfilled, (state, action) => {
        state.user =action.payload
    });
    builder.addCase(login.fulfilled, (state, action) => {
        state.user =action.payload
    });

   
  },
});


export const authReducer =
authSlice.reducer;