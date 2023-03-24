import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import projectUserSaga from './projectUserSaga'
import projectTestTask from './projectTestTaskSlice'

const saga = createSagaMiddleware()
export const storeSaga = configureStore({
  reducer: {
    projectTestTask,
  },
  middleware: [saga]
})

saga.run(projectUserSaga)