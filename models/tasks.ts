interface Task {
  title: string;
  description: string;
  priority: string;
  assignee: string;
  status: 'todo' | 'inprogress' | 'done' | 'backlog';
}

export default Task;