import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type UserLogin, type UserInitialState } from '../../types/user'
import { loginUserThunk } from './userThunk'

const initialState: UserInitialState = {
  isLoading: false,
  user: null
}

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: UserLogin, thunkAPI) => {
    return await loginUserThunk('/auth/login', user, thunkAPI)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.user = payload
    })
    builder.addCase(loginUser.rejected, (state, { payload }: any) => {
      state.isLoading = false
      console.error('Error: ', payload)
    })
  }
})

export default userSlice.reducer
export const { logoutUser } = userSlice.actions
