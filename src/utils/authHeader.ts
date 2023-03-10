const authHeader = (
  thunkAPI: any
): {
  headers: {
    authorization: string
  }
} => {
  const token: string = thunkAPI.getState().user.user.token
  return {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
}

export default authHeader
