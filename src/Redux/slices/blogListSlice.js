import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: [],
}

export const blogList = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
   setBlogList: (state, action) => {
      state.value = action.payload
   }
  },
})

export const { setBlogList } = blogList.actions

export default blogList.reducer