import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItem :[]
    },
    reducers:{
      addItems: (state,action)=>{
            state.cartItem.push(action.payload)
      },  
      removeItems: (state,action)=>{
        state.cartItem.pop()
      },  
      clearItems: (state,action)=>{
            state.cartItem.length === 0
      }
    }
}) 

export const {addItems,removeItems,clearItems} = cartSlice.actions
export default cartSlice.reducer