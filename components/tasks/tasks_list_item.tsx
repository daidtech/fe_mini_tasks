"use client"

import { useState } from "react"
import { Plus } from 'lucide-react'
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
import Task from "@/models/tasks"

export default function TaskListItem({ task }: { task: Task }) {
  return (
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
  )
}