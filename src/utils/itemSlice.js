import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[
            {
                id:0,
                count:0
            }
        ],
    },
    reducers:{
        
       updateCount:(state,action)=>{
        console.log(action.payload);
        console.log(state.items);
        state.items[action.payload]['card']['info']['count'] += 1; 
       },
       decreaseCount:(state,action)=>{
        state.items[action.payload]['card']['info']['count'] -= 1; 
       }
    }
});

export const {updateCount,decreaseCount} = cartSlice.actions;
export default cartSlice.reducer