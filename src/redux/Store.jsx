import {configureStore} from "@reduxjs/toolkit";
import {CartSlice} from "./Slices/cartSlice";
import {searchSlice} from "./Slices/searchSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
        search:searchSlice.reducer
    }
});

