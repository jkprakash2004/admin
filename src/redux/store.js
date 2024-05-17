import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/prdouctGet/productSlice";
export const store=configureStore({
    reducer:{
        users:productReducer,
    }
})