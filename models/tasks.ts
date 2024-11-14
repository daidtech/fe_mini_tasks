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
  startDate?: string;
  endDate?: string;
}

export {
  TaskStatus
}
export default Task;