import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: false,
}

export const adminAutorization = createSlice({
  name: 'adminAutorization',
  initialState,
  reducers: {
   setAdminAutorization: (state, action) => {
      state.value = action.payload
   }
  },
})

export const { setAdminAutorization } = adminAutorization.actions

export default adminAutorization.reducer