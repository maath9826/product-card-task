import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";

//Our Redux store structure consists of a single slice called "product"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
