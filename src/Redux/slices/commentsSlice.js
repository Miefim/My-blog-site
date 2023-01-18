import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
   commentsArray: [],
   
   getStatus: null,
   getError: null,

   postStatus: null,
   postError: null,

   deleteStatus: null,
   deleteError: null,
}

export const getComments = createAsyncThunk("comments/getComments", 
   async (getParam, {rejectWithValue}) => {
      try {
         const response = await fetch(`${getParam? getParam : ''}`)

         if(!response.ok) {
            throw new Error("Ошибка сервера(")
         }

         const result = await response.json() 

         return result 

      } 
      catch (error) {
         return rejectWithValue("Ошибка сервера(")   
      }
   }
)

export const postComments = createAsyncThunk("comments/postComments",
  async ([ obj, getParam ], { rejectWithValue }) => {
   try {
      const response = await fetch(`${getParam? getParam : ''}`, {
      method: "POST",
      headers: {
         "Content-type": "application/json" 
      },
      body: JSON.stringify(obj)
      })
   } catch (error) {
      return rejectWithValue("Не удалось добавить комментарий")
   }
   
  } 
)

export const deleteComments = createAsyncThunk("comments/deleteComments",
  async ([ id, getParam ], { rejectWithValue }) => {
   try {
      const response = await fetch(`${getParam? getParam : ''}/${id}`, {
      method: "DELETE",
      })
   } catch (error) {
      return rejectWithValue("Ошибка удаления")
   } 
  } 
)

export const comments = createSlice({
   name: 'comments',
   initialState,
   reducers: {
    resetStatus: (state, action) => {
       state.getStatus = action.payload
       state.postStatus = action.payload
       state.deleteStatus = action.payload
    },
   },
   extraReducers: {
      [getComments.pending]: (state) => {
         state.getStatus = 'loading'
         state.getError = null
      },
      [getComments.fulfilled]: (state, action) => {
         state.getStatus = 'resolved'
         state.commentsArray = action.payload
      },
      [getComments.rejected]: (state, action) => {
         state.getStatus = 'rejected'
         state.getError = action.payload
      },

      [postComments.pending]: (state) => {
         state.postStatus = 'loading'
         state.postError = null
      },
      [postComments.fulfilled]: (state) => {
         state.postStatus = 'resolved'
      },
      [postComments.rejected]: (state, action) => {
         state.postStatus = 'rejected'
         state.postError = action.payload
      },
   
      [deleteComments.pending]: (state) => {
         state.deleteStatus = 'loading'
         state.deleteError = null
      },
      [deleteComments.fulfilled]: (state) => {
         state.deleteStatus = 'resolved'
      },
      [deleteComments.rejected]: (state, action) => {
         state.deleteStatus = 'rejected'
         state.deleteError = action.payload
      },
   }
})

export const { resetStatus } = comments.actions

export default comments.reducer


