import { createSlice, current } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name:"dark",
    initialState:{
        mode:false
    },
    reducers:{
        dark: (state,action)=>{
            //modifying the state
            state.mode = action.payload;
         },
       
          
    }
});

export const {dark} = darkSlice.actions;
export default darkSlice.reducer