enum TaskStatus {
  Todo = 'todo',
  InProgress = 'in-progress',
  Done = 'done',
  Backlog = 'backlog'
}

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  status: TaskStatus;
  createdAt?: Date;
  updatedAt?: Date;
  dueDate?: Date;
}

export {
  TaskStatus
}
export default Task;