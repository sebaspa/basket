import { type UserLogin } from '../../types/user'
import customFetch from '../../utils/axios'

export const loginUserThunk = async (
  url: string,
  user: UserLogin,
  thunkAPI: any
): Promise<any> => {
  try {
    const response = await customFetch.post(url, user)
    return response.data
  } catch (error) {
    return thunkAPI.rejectedWithValue(error)
  }
}
