import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   value: []
}

export const projectList = createSlice({
  name: 'projectList',
  initialState,
  reducers: {
   setProjectList: (state, action) => {
      state.value = action.payload
   }
  },
})

export const { setProjectList } = projectList.actions

export default projectList.reducer