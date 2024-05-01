import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUrls } from "../config";
import axios from 'axios';
import axiosInstance from "../services/axiosInstance";
const initialState = {
ProducerList:null,
addproducerSuccess:false,
};

export const getAllProducers = createAsyncThunk(
  "producer/getAllProducers",
  async () => {
    const res = await axiosInstance.get(apiUrls.getProducers);
    const result = await res.data.data;
    return result;
  }
);
export const addProducer = createAsyncThunk(
  "producer/AddProducer",
  async (data) => {
    const res = await axiosInstance.post(apiUrls.addProducer,data);
    const result = await res.data.data;
    return result;
  }
);


export const producerSlice = createSlice({
  name: "producer",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {

    builder.addCase(getAllProducers.fulfilled, (state, action) => {
        state.ProducerList =action.payload
    });
   

    builder.addCase(addProducer.pending, (state, action) => {
        state.addproducerSuccess =false
    });
    builder.addCase(addProducer.fulfilled, (state, action) => {
        state.addproducerSuccess =true
    });
   
  },
});


export const producerReducer =
producerSlice.reducer;