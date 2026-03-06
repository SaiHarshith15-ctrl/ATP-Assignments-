import { addTask, getAllTasks, completeTask } from "./task.js";

// 1. Add some tasks
console.log(addTask("Study MERN", "high", "2026-04-10"));
console.log(addTask("Gym workout", "medium", "2026-04-12"));
console.log(addTask("Buy groceries", "low", "2026-04-15"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log("\nCompleting Task 2...");
console.log(completeTask(2));

// 4. Display tasks again
console.log("\nUpdated Tasks:");
console.log(getAllTasks());