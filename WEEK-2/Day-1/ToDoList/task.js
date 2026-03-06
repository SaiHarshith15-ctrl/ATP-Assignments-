// Import validator functions
import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {

  // validate inputs
  if (!validateTitle(title)) {
    return "Invalid title";
  }

  if (!validatePriority(priority)) {
    return "Invalid priority";
  }

  if (!validateDueDate(dueDate)) {
    return "Invalid due date";
  }

  // create task object
  const task = {
    id: tasks.length + 1,
    title: title,
    priority: priority,
    dueDate: dueDate,
    completed: false
  };

  // add task to array
  tasks.push(task);

  return "Task added successfully";
}


// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}


// 3. Mark task as complete
export function completeTask(taskId) {

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return "Task not found";
  }

  task.completed = true;

  return `Task ${taskId} marked as completed`;
}