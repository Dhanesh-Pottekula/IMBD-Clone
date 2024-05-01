// store.js
import { configureStore } from "@reduxjs/toolkit";

import { movieReducer } from "../slice/movie";
import { producerReducer } from "../slice/producer";
import { actorReducer } from "../slice/actor";
import { authReducer } from "../slice/auth";


const store = configureStore({
  reducer: {
    movie: movieReducer,
    producer:producerReducer,
    actor:actorReducer,
    auth:authReducer,
  },
});

export default store;
