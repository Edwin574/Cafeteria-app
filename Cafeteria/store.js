import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './src/slices/cartSlice'

const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store