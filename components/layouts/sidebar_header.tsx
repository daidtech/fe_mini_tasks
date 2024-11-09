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
import { Dialog, DialogContent, DialogHeader, DialogOverlay, DialogTitle} from '../ui/dialog';
import { useState } from 'react';

export default function SidebarHeader() {

  const [isOpen, setIsOpen] = useState(false);

  const onClose = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <header className="flex h-14 items-center gap-2 border-b">
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
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="bg-red-500 bg-opacity-0" /> {/* Transparent backdrop */}
        <DialogContent className="max-w-lg p-6 bg-white shadow-lg rounded-md" >
          <DialogHeader>
            <DialogTitle>My Dialog with Transparent Backdrop</DialogTitle>
          </DialogHeader>
          <p>The background overlay is fully transparent.</p>
        </DialogContent>
      </Dialog>

    </header>
  )
}