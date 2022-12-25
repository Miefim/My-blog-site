import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   blogList: [],
   status: null,
   error: null,

   deleteStatus: null,
   deleteError: null,
}

export const fetchBlogList = createAsyncThunk("blogList/fetchBlogList", 
   async (getParam, {rejectWithValue}) => {
      try {
         const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items${getParam? getParam : ''}`)

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

export const postBlogList = createAsyncThunk("blogList/postBlogList",
  async ([ obj, getParam ], { rejectWithValue }) => {
   try {
      const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items${getParam? getParam : ''}`, {
      method: "POST",
      headers: {
         "Content-type": "application/json" 
      },
      body: JSON.stringify(obj)
      })
   } catch (error) {
      return rejectWithValue("Не удалось загрузить пост")
   }
   
  } 
)

export const deleteBlogList = createAsyncThunk("blogList/deleteBlogList",
  async ([ id, getParam ], { rejectWithValue }) => {
   try {
      const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items/${getParam? getParam : ''}${id}`, {
      method: "DELETE",
      })
   } catch (error) {
      return rejectWithValue("Ошибка удаления")
   } 
  } 
)

export const blogList = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
   setBlogList: (state, action) => {
      state.blogList = action.payload
   },

   resetStatus: (state, action) => {
      state.status = action.payload
   },
  },

  extraReducers: {
   [fetchBlogList.pending]: (state) => {
      state.status = 'loading'
      state.error = null
   },
   [fetchBlogList.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.blogList = action.payload
   },
   [fetchBlogList.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
   },

   [postBlogList.pending]: (state) => {
      state.status = 'loading'
      state.error = null
   },
   [postBlogList.fulfilled]: (state) => {
      state.status = 'resolved'
   },
   [postBlogList.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
   },

   [deleteBlogList.pending]: (state) => {
      state.deleteStatus = 'loading'
      state.deleteError = null
   },
   [deleteBlogList.fulfilled]: (state) => {
      state.deleteStatus = 'resolved'
   },
   [deleteBlogList.rejected]: (state, action) => {
      state.deleteStatus = 'rejected'
      state.deleteError = action.payload
   },
  },
})

export const { setBlogList, resetStatus } = blogList.actions

export default blogList.reducer