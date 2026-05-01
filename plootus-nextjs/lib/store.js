import { configureStore } from '@reduxjs/toolkit';
import employerReducer from './slices/employerSlice';
import graphReducer from './slices/graphSlice';
import generalReducer from './slices/generalSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    employer: employerReducer,
    graphReducer: graphReducer,
    generalReducer: generalReducer,
    userReducer: userReducer,
  },
});
