import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '@/models/tasks';


interface TaskState {
  listTasks: Task[] | [];
}

const initialState: TaskState = {
  listTasks: new Array<Task>(),
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.listTasks = [...state.listTasks, action.payload]
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
