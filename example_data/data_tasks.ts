import Task from "@/models/tasks";

const exampleTasks: Task[] = [
  {
    title: 'Task 1',
    description: 'Description for Task 1',
    priority: 'High',
    assignee: 'John Doe',
    id: "",
    status: "in-progress"
  },
  {
    title: 'Task 2',
    description: 'Description for Task 2',
    priority: 'Medium',
    assignee: 'Jane Smith',
    id: "",
    status: "in-progress"
  },
  {
    title: 'Task 3',
    description: 'Description for Task 3',
    priority: 'Low',
    assignee: 'Alice Johnson',
    id: "",
    status: "in-progress"
  },
];

export {
  exampleTasks
}