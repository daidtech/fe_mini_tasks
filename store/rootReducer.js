// src/store/rootReducer.js
import { combineReducers } from 'redux';
import sidebarReducer from './slices/sidebarSlice';
import tasksReducer from './slices/tasksSlice';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  tasks: tasksReducer,
});

export default rootReducer;
