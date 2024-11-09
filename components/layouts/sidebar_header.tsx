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
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogTitle} from '@/components/ui/dialog';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
            <DialogTitle>New issue</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">
              Priority
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assignee" className="text-right">
                Assignee
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Assign to" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="bob">Bob Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Create Issue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </header>
  )
}