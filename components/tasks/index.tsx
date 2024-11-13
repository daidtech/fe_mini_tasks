'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '@/store/slices/tasksSlice';
import Task from '@/models/tasks';
import { exampleTasks } from '@/example_data/data_tasks';

export default function Tasks() {
  const listTasks = useSelector((state: { tasks: { listTasks: Task[] } }) => state.tasks.listTasks);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {listTasks.map((task: Task, index: number) => (
          <div key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>priority: {task.priority}</p>
            <p>assign: {task.assignee}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}