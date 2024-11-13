"use client"

import { Bell, SlidersHorizontal, Filter, LayoutGrid } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function TasksListHeader({ setActiveFilter }: { setActiveFilter: (filter: string) => void }) {
  return (
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
  )
}