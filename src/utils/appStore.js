import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
import darkReducer from "./darkSlice"
import priceReducer from "./priceSlice"
const appStore = configureStore(
    {
        reducer:{
            cart: cardReducer,
            dark:darkReducer,
            price:priceReducer
        }
    }
);

export default appStore;