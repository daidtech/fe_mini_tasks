"use client"

import { Bell, SlidersHorizontal, Filter, LayoutGrid, PanelLeftDashed } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TasksListHeader({ setActiveFilter }: { setActiveFilter: (filter: string) => void }) {
  return (
    <header className='w-full'>
      <div className="flex items-center h-14">
        <nav className="flex items-center">
          <Button variant="ghost" className="hidden lg:block text-sm font-medium hidden sm:inline-flex">
            <PanelLeftDashed className="w-5 h-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            All Tasks
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Active
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Backlog
          </Button>
        </nav>
        <div className="ml-auto flex items-center space-x-4 me-5">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <LayoutGrid className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      <div className="flex items-center px-4 h-14 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem onSelect={() => setActiveFilter("all")}>All Tasks</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setActiveFilter("active")}>Active Tasks</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setActiveFilter("backlog")}>Backlog</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-auto flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-1" />
                Display
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem onSelect={() => setActiveFilter("all")}>All Tasks</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("active")}>Active Tasks</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setActiveFilter("backlog")}>Backlog</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}