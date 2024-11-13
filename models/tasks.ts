interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  status: 'todo' | 'in-progress' | 'done' | 'backlog';
  startDate?: string;
  endDate: string;
}

export default Task;