import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   list: [],
   user: null,
   isLoading: false,
   error: null
}

export const projectTestTask = createSlice({
  name: 'projectTestTask',
  initialState,
  reducers: {
   setList: (state, action) => {
      state.list = action.payload
   },

   getUserFetch: (state) => {
      state.isLoading = true
      state.error = null
   }, 

   getUserFulfilled: (state, action) => {
      state.user = action.payload
      state.isLoading = false 
   },

   getUserRejected: (state, action) => {
      state.isLoading = false
      state.error = action.payload
   },
  },
})

export const { setList, getUserFetch, getUserFulfilled, getUserRejected } = projectTestTask.actions

export default projectTestTask.reducer