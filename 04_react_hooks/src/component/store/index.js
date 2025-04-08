import { configurestore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";

const store = configurestore( {
  reducer: counterReducer,
});

export default store;
