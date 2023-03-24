import { configureStore } from '@reduxjs/toolkit'

import blogList from './slices/blogListSlice'
import adminAutorization from './slices/adminAuthorizationSlice'
import comments from './slices/commentsSlice'
import user from './slices/userSlice'
import booksSlice from '../components/project/googleBookApi/redux/slices/booksSlice'
import sortSlice from '../components/project/googleBookApi/redux/slices/sortSlice'
import scrollSlice from '../components/project/googleBookApi/redux/slices/scrollSlice'
import searchSlice from '../components/project/googleBookApi/redux/slices/searchSlice'

export const store = configureStore({
  reducer: {
    blogList,
    adminAutorization,
    comments,
    user,
    booksSlice,
    sortSlice,
    scrollSlice,
    searchSlice
  },
})