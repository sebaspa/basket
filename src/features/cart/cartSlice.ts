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
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item !== null && item !== undefined) {
        item.quantity++
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (item !== null && item !== undefined) {
        if (item.quantity === 1) {
          item.quantity = 1
        } else {
          item.quantity--
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    }
  }
})

export default cartSlice.reducer

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions
