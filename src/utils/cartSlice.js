import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            //modifying the state
            state.items.push(action.payload);
         },
       removeItem:(state,action)=>{
        
        
            
          state.items.splice(action.payload,1);
        
       }, 
       clearCart:(state,action)=>{
        state.items.length = 0;
       },
       updateCount:(state,action)=>{
        console.log(action.payload);
        console.log(current(state.items));
        state.items[action.payload]['card']['info']['count'] += 1; 
       },
       decreaseCount:(state,action)=>{
        state.items[action.payload]['card']['info']['count'] -= 1; 
       }
    }
});

export const {addItem, removeItem,clearCart,updateCount,decreaseCount} = cartSlice.actions;
export default cartSlice.reducer