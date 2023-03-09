import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import productSlice from './features/product/productSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    user: userSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
