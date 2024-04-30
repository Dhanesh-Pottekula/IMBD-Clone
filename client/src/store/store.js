// store.js
import { configureStore } from "@reduxjs/toolkit";

import { movieReducer } from "../slice/movie";
import { producerReducer } from "../slice/producer";
import { actorReducer } from "../slice/actor";


const store = configureStore({
  reducer: {
    movie: movieReducer,
    producer:producerReducer,
    actor:actorReducer,
  },
});

export default store;
