import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    loading: false,
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload
      state.loading = false
      state.error = null
    },
    setLoading: (state) => {
      state.loading = true
      state.error = null
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    logout: (state) => {
      state.userInfo = null
    }
  }
})

export const { setUser, setLoading, setError, logout } = userSlice.actions
export default userSlice.reducer