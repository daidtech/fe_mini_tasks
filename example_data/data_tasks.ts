import Task from "@/models/tasks";

const exampleTasks: Task[] = [
  {
    title: 'Task 1',
    description: 'Description for Task 1',
    priority: 'High',
    assignee: 'John Doe',
  },
  {
    title: 'Task 2',
    description: 'Description for Task 2',
    priority: 'Medium',
    assignee: 'Jane Smith',
  },
  {
    title: 'Task 3',
    description: 'Description for Task 3',
    priority: 'Low',
    assignee: 'Alice Johnson',
  },
];

export {
  exampleTasks
}