import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
   response: [],
   
   getStatus: null,
   getError: null,

   postStatus: null,
   postError: null,

   deleteStatus: null,
   deleteError: null,
}

export const GET = createAsyncThunk("fetching/GET", 
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

export const POST = createAsyncThunk("fetching/POST",
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

export const DELETE = createAsyncThunk("fetching/DELETE",
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

export const fetching = createSlice({
   name: 'fetching',
   initialState,
   reducers: {
    resetStatus: (state, action) => {
       state.getStatus = action.payload
       state.postStatus = action.payload
       state.deleteStatus = action.payload
    },
   },
   extraReducers: {
      [GET.pending]: (state) => {
         state.getStatus = 'loading'
         state.getError = null
      },
      [GET.fulfilled]: (state, action) => {
         state.getStatus = 'resolved'
         state.commentsArray = action.payload
      },
      [GET.rejected]: (state, action) => {
         state.getStatus = 'rejected'
         state.getError = action.payload
      },

      [POST.pending]: (state) => {
         state.postStatus = 'loading'
         state.postError = null
      },
      [POST.fulfilled]: (state) => {
         state.postStatus = 'resolved'
      },
      [POST.rejected]: (state, action) => {
         state.postStatus = 'rejected'
         state.postError = action.payload
      },
   
      [DELETE.pending]: (state) => {
         state.deleteStatus = 'loading'
         state.deleteError = null
      },
      [DELETE.fulfilled]: (state) => {
         state.deleteStatus = 'resolved'
      },
      [DELETE.rejected]: (state, action) => {
         state.deleteStatus = 'rejected'
         state.deleteError = action.payload
      },
   }
})

export const { resetStatus } = fetching.actions

export default fetching.reducer