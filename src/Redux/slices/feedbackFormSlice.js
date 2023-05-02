import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name: '',
   tel: '',
   email: '',
   message: '',

   nameError: '',
   telError: '',
   emailError: '',
   messageError: ''
}

export const feedbackFormSlice = createSlice({

   name: 'feedbackFormSlice',
   initialState,

   reducers: {

      setName: (state, action) => {
         state.name = action.payload
      },
      setTel: (state, action) => {
         state.tel = action.payload
      },
      setEmail: (state, action) => {
         state.email = action.payload
      },
      setMessage: (state, action) => {
         state.message = action.payload
      },

      setNameError: (state, action) => {
         state.nameError = action.payload
      },
      setTelError: (state, action) => {
         state.telError = action.payload
      },
      setEmailError: (state, action) => {
         state.emailError = action.payload
      },
      setMessageError: (state, action) => {
         state.messageError = action.payload
      }
   
   }

})

export const { setName, setTel, setEmail, setMessage, setNameError, setTelError, setEmailError, setMessageError } = feedbackFormSlice.actions

export const feedbackFormSelector = state => state.feedbackFormSlice

export default feedbackFormSlice.reducer