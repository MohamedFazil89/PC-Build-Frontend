// store.js
import { configureStore } from '@reduxjs/toolkit';
import componentReducer from './ComponentSlice';

export const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});

export default store;
