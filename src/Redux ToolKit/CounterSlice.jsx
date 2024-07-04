import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  deposit:0,
  withdraw:0,
  total:0,
  backendData:[]
};
export const fetchData=createAsyncThunk("CounterSlice/FetchData",async()=>{
const response=await axios.get("https://jsonplaceholder.typicode.com/users");
return response.data;
})
const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    IncrementPayload: (state,action) => {
        state.count +=action.payload;
      },
      DecrementPayload: (state,action) => {
        state.count -=action.payload;
      },
      Deposit:(state,action)=>{
        state.deposit=action.payload;
        state.withdraw=0;
        state.total=state.deposit;

      },
      Withdraw:(state,action)=>{
        state.withdraw=action.payload;
        state.total=state.deposit-action.payload;
      }
  },
  extraReducers:(builder)=>{
  builder.addCase(fetchData.pending,(state)=>{
  state.backendData=[];
  }).addCase(fetchData.fulfilled,(state,action)=>{
 state.backendData=action.payload;
  }).addCase(fetchData.rejected,(state)=>{
    state.backendData=[];
  })
  }
});

export const { increment, decrement,IncrementPayload,DecrementPayload,Deposit,Withdraw} = counterSlice.actions;
export default counterSlice.reducer;
