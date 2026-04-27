import { configureStore } from '@reduxjs/toolkit';
import employerReducer from './slices/employerSlice';

export const store = configureStore({
  reducer: {
    employer: employerReducer,
  },
});
