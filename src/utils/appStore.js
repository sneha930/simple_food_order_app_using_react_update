import {configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

// this reducer is responsible to modify the appStore and it is a combination of different small stores
// created store
const appStore = configureStore({
   reducer : {
      cart: cartReducer,
   }
});

export default appStore;