"use client"

import { useState } from "react"
import Task from "@/models/tasks"
import TasksListHeader from "./tasks_list_header"
import TaskListItem from "./tasks_list_item"

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

  const tasks: Task[] = [
    {
      id: "MIN-1",
      title: "Welcome to Linear 👋",
      status: "in-progress",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "JD",
      description: "",
      priority: ""
    },
    {
      id: "MIN-2",
      title: "3 ways to navigate Linear: Command menu, keyboard or mouse",
      status: "todo",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "AS",
      description: "",
      priority: ""
    },
    {
      id: "MIN-5",
      title: "Customize settings",
      status: "todo",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "TK",
      description: "",
      priority: ""
    },
    {
      id: "MIN-9",
      title: "Next steps",
      status: "done",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "JD",
      description: "",
      priority: ""
    },
  ]

  return (
    <div className="w-full max-full mx-auto">
      <TasksListHeader setActiveFilter={setActiveFilter} />
      <TaskList tasks={tasks} />
    </div>
  )
}