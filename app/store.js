import { configureStore } from '@reduxjs/toolkit'
import servicesSlice from "../features/servicesSlice"

export const store = configureStore({
  reducer: { data: servicesSlice }
})


