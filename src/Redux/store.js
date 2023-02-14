import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import projectUserSaga from './saga/projectUserSaga'
import projectTestTask from './slices/projectTestTaskSlice'
import blogList from './slices/blogListSlice'
import adminAutorization from './slices/adminAuthorizationSlice'
import comments from './slices/commentsSlice'
import user from './slices/userSlice'

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    projectTestTask,
    blogList,
    adminAutorization,
    comments,
    user
  },
  middleware: [saga]
})

saga.run(projectUserSaga)