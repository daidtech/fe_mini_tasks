import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Download,
  LayoutGrid,
  LogOut,
  Search,
  Settings,
  FilePlus2,
} from 'lucide-react'

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import NewIssueForm from '@/components/tasks/new_issue_form';

export default function MiniSidebarHeader() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-14 items-center gap-2 border-b">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <LayoutGrid className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>
              <Settings className="mr-2 size-4" />
              Preferences
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 size-4" />
              Download App
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Search className="mr-2 size-4 shrink-0" />
        <div className="flex-grow" />
        <Button variant="outline" size="icon" className="shrink-0" onClick={() => setIsOpen(true)}>
          <FilePlus2 className="size-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
      <NewIssueForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}