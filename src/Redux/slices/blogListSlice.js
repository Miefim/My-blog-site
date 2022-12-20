import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   blogList: [],
   status: null,
   error: null,  
}

export const fetchBlogList = createAsyncThunk("blogList/fetchBlogList", 
   async (getParam, {rejectWithValue}) => {
      try {
         const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items${getParam? getParam: ''}`)

         if(!response.ok) {
            throw new Error("Ошибка сервера(")
         }

         const result = await response.json() 
   
         return result 

      } 
      catch (error) {
         return rejectWithValue(error.message)   
      }
   }
)

export const postBlogList = createAsyncThunk("blogList/postBlogList",
  async (blogUnit) => {
   
   const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items`, {
      method: "POST",
      headers: {
         "Content-type": "application/json" 
      },
      body: JSON.stringify(blogUnit)
   })
  } 
)

export const deleteBlogList = createAsyncThunk("blogList/deleteBlogList",
  async (id) => { 
   const response = await fetch(`https://639ef68b7aaf11ceb88f020b.mockapi.io/blog-items/${id}`, {
      method: "DELETE",
   })
  } 
)

export const blogList = createSlice({
  name: 'blogList',
  initialState,
  reducers: {
   setBlogList: (state, action) => {
      state.blogList = action.payload
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
  }
})

export const { setBlogList } = blogList.actions

export default blogList.reducer