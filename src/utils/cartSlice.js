import { createSlice } from "@reduxjs/toolkit";

// addItem is action , 
   // (state, action) => {state.items.push(action.payload)}, this is reducer  function
   // here, we will modify state based on action

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: []
   },
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload)
      },
      removeItem: (state) => {
         state.items.pop()
      },
      clearCart: (state) => {
         state.items.length = 0;
      }
   }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;