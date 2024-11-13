import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogOverlay, DialogTitle} from '@/components/ui/dialog';
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import Task from "@/models/tasks";
import { useState } from "react";
import { addTask } from "@/store/slices/tasksSlice";

interface NewIssueFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function NewIssueForm({ isOpen, setIsOpen }: NewIssueFormProps) {
  const onClose = (open: boolean) => {
    setIsOpen(open);
  };
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState<Task>({
    title: "",
    description: "",
    priority: "",
    assignee: "",
  });

  const createIssue = () => {
    setIsOpen(false)
    dispatch(addTask(currentTask))
  }

  return (
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
          <Button type="submit" onClick={() => createIssue()}>
            Create Issue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}