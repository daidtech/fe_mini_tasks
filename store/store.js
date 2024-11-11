// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import root reducer, combine slices

const store = configureStore({
  reducer: rootReducer,
});

export default store;
