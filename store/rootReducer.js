// src/store/rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './slices/counterSlice';
import tasksReducer from './slices/tasksSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
});

export default rootReducer;
