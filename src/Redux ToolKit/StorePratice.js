import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterPratice";

 const store=configureStore({
    reducer:{
        CounterSlice
    }
})
export default store;