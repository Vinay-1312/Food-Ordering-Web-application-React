import { createSlice, current } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name:"price",
    initialState:{
        totalPrice:0
    },
    reducers:{
        updatePrice: (state,action)=>{
            //modifying the state
            state.totalPrice = action.payload;
         }
       
           
    }
});

export const {updatePrice} = priceSlice.actions;
export default priceSlice.reducer