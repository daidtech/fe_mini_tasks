"use client"

import { useState } from "react"
import { Bell, SlidersHorizontal, Filter, LayoutGrid, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// import { useSelector } from "react-redux"
// import Task from "@/models/tasks"

export default function Tasks() {
  // const listTasks = useSelector((state: { tasks: { listTasks: Task[] } }) => state.tasks.listTasks);
  const [, setActiveFilter] = useState("all")

  const tasks = [
    {
      id: "MIN-1",
      title: "Welcome to Linear 👋",
      status: "in-progress",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "JD",
    },
    {
      id: "MIN-2",
      title: "3 ways to navigate Linear: Command menu, keyboard or mouse",
      status: "todo",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "AS",
    },
    {
      id: "MIN-5",
      title: "Customize settings",
      status: "todo",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "TK",
    },
    {
      id: "MIN-9",
      title: "Next steps",
      status: "done",
      startDate: "Nov 9",
      endDate: "Nov 9",
      assignee: "JD",
    },
  ]

  return (
    <div className="w-full max-full mx-auto">
      <header className="border-b">
        <div className="flex items-center px-4 h-14">
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              All Issues
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Active
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Backlog
            </Button>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <LayoutGrid className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center px-4 h-14 border-t">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem onSelect={() => setActiveFilter("all")}>All Issues</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("active")}>Active Issues</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("backlog")}>Backlog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-auto flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Display
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem onSelect={() => setActiveFilter("all")}>All Issues</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("active")}>Active Issues</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("backlog")}>Backlog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="px-4">
        {["in-progress", "todo", "done"].map((status) => {
          const filteredTasks = tasks.filter((task) => task.status === status);
          if (filteredTasks.length === 0) return null;

          return (
            <div key={status} className="py-4">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <span className="font-medium capitalize">{status.replace('-', ' ')}</span>
                <span className="ml-2">{filteredTasks.length}</span>
              </div>
              <div className="space-y-1">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center p-2 rounded-lg group cursor-pointer ${
                      task.status === "in-progress" ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-muted"
                    }`}
                  >
                    <Select defaultValue={task.status}>
                      <SelectTrigger className="w-6 h-6 border-0 p-0 mr-3">
                        <SelectValue>
                          {task.status === "in-progress" ? "⏳" : task.status === "done" ? "✅" : "⭕"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">Todo</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-muted-foreground mr-2">{task.id}</span>
                        <span className="text-sm">{task.title}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        {task.startDate} - {task.endDate}
                      </span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Avatar className="h-8 w-8 cursor-pointer">
                            <AvatarFallback>{task.assignee}</AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Assign to John Doe (JD)</DropdownMenuItem>
                          <DropdownMenuItem>Assign to Alice Smith (AS)</DropdownMenuItem>
                          <DropdownMenuItem>Assign to Tom King (TK)</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-48">
                          <div className="grid gap-2">
                            <Button size="sm" className="w-full justify-start">Add subtask</Button>
                            <Button size="sm" className="w-full justify-start">Add comment</Button>
                            <Button size="sm" className="w-full justify-start">Copy link</Button>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  )
}