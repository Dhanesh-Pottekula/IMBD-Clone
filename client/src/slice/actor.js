import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../config";
import axios from 'axios';
import axiosInstance from "../services/axiosInstance";
const initialState = {
actorList:null,
addActorSuccess:false,
};

export const getAllActors = createAsyncThunk(
  "actor/getAllActors",
  async () => {
    const res = await axiosInstance.get(apiUrls.getActors);
    const result = await res.data.data;
    return result;
  }
);
export const onAddActor = createAsyncThunk(
  "actor/onAddActor",
  async (data) => {
    const res = await axiosInstance.post(apiUrls.addActor,data);
    const result = await res.data.data;
    return result;
  }
);


export const actorSlice = createSlice({
  name: "actor",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder.addCase(getAllActors.fulfilled, (state, action) => {
        state.actorList =action.payload
    });
   

    builder.addCase(onAddActor.pending, (state, action) => {
        state.addActorSuccess =false
    });
    builder.addCase(onAddActor.fulfilled, (state, action) => {
        state.addActorSuccess =true
    });
   
  },
});


export const actorReducer =
actorSlice.reducer;