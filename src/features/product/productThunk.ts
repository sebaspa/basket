import { customFreeFetch, customFetch, checkForUnauthorizedResponse } from '../../utils/axios'

export const getAllProductsThunk = async (_: any, thunkAPI: any): Promise<any> => {
  try {
    const response = await customFreeFetch.get('/products?limit=10')
    return response.data.products
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const getProductThunk = async (productId: string, thunkAPI: any): Promise<any> => {
  try {
    const response = await customFetch.get(`/auth/products/${productId}`)
    return response.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
