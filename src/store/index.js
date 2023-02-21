import { configureStore } from "@reduxjs/toolkit";
import {  authSlice } from "./auth/authSlice";
import {  calculatorSlice } from "./calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]:authSlice.reducer,
    [calculatorSlice.name]: calculatorSlice.reducer
  }
})

store.subscribe(() => {
  console.log("STORE CHANGED", store.getState());
});
