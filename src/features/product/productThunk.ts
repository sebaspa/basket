import customFetch from '../../utils/axios'

export const getAllProductsThunk = async (_: any, thunkAPI: any): Promise<any> => {
  try {
    const response = await customFetch.get('/products?limit=10')
    return response.data.products
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}
