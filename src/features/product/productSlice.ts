import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type TProduct } from '../../types/product'
import { getAllProductsThunk } from './productThunk'

const products: TProduct[] = []

const initialState = {
  isLoading: false,
  products
}

export const getAllProducts = createAsyncThunk('product/getProducts', getAllProductsThunk)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.products = payload
    })
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.isLoading = false
      console.error('Error:', payload)
    })
  }
})

export default productSlice.reducer
