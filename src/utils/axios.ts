import axios from 'axios'
import { logoutUser } from '../features/user/userSlice'
import { getUserFromLocalStorage } from './localStorage'

const customFetch = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const customFreeFetch = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const user = getUserFromLocalStorage()

customFetch.interceptors.request.use((config) => {
  if (user !== null) {
    const token: string = user.token
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const checkForUnauthorizedResponse = (
  error: any,
  thunkAPI: any
): ((error: any, thunkAPI: any) => any) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(logoutUser())
    return thunkAPI.rejectWithValue('Unauthorized! Logging out')
  }
  return thunkAPI.rejectWithValue(error)
}

export { customFetch, customFreeFetch }
