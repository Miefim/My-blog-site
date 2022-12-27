import { configureStore } from '@reduxjs/toolkit'
import projectList from './slices/projectListSlice'
import blogList from './slices/blogListSlice'
import adminAutorization from './slices/adminAuthorizationSlice'
import comments from './slices/commentsSlice'
import fetching from './slices/fetchingSlice'

export const store = configureStore({
  reducer: {
   projectList,
   blogList,
   adminAutorization,
   comments,
   fetching,
},
})