import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  products: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
})

export default productSlice.reducer
