"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import Task from "@/models/tasks"
import TasksListHeader from "./tasks_list_header"
import TaskListItem from "./tasks_list_item"
import { selectTasks } from "@/store/slices/tasksSlice"

const TaskList = ({ tasks }: {tasks: Task[]}) => (
  <main className="px-4">
    {["in-progress", "todo", "done"].map((status) => {
      const filteredTasks = tasks.filter((task) => task.status === status);
      if (filteredTasks.length === 0) return null;

      return (
        <div key={status}>
          <div className="flex items-center text-sm text-muted-foreground bg-gray-200 mx-[-36] px-8 py-1">
            <span className="font-medium capitalize px-2 py-1 rounded">{status.replace('-', ' ')}</span>
            <span className="font-medium ml-2">{filteredTasks.length}</span>
          </div>
          <div className="space-y-1">
            {filteredTasks.map((task) => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      );
    })}
  </main>
)

export default function TaskListComponent() {
  const [, setActiveFilter] = useState("all")
  const tasks = useSelector(selectTasks)

  return (
    <div className="w-full max-full mx-auto">
      <TasksListHeader setActiveFilter={setActiveFilter} />
      <TaskList tasks={tasks} />
    </div>
  )
}