import { createSlice } from '@reduxjs/toolkit'
import { type TCartItem } from '../../types/product'

const cart: TCartItem[] = []
const initialState = {
  cart
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item: TCartItem) => item.id === action.payload.id
      )
      if (itemInCart !== null && itemInCart !== undefined) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    }
  }
})

export default cartSlice.reducer

export const { addToCart } = cartSlice.actions
