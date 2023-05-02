import { configureStore } from '@reduxjs/toolkit'

import feedbackFormSlice from './slices/feedbackFormSlice'

export const store = configureStore({
  reducer: {
    feedbackFormSlice
  },
})