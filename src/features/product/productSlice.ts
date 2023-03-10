import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type TProduct } from '../../types/product'
import { getAllProductsThunk, getProductThunk } from './productThunk'

const products: TProduct[] = []

const initialState = {
  isLoading: false,
  products
}

export const getAllProducts = createAsyncThunk('product/getProducts', getAllProductsThunk)
export const getProduct = createAsyncThunk('product/getProduct', getProductThunk)

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
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      state.isLoading = false
    })
    builder.addCase(getProduct.rejected, (state, { payload }) => {
      state.isLoading = false
      console.error('Error:', payload)
    })
  }
})

export default productSlice.reducer
