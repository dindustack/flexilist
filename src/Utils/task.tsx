import { effect, signal } from "@preact/signals-react";
import { Task } from "../types";

const LOCAL_STORAGE_TASKS = "TODO_TASKS";

export const tasks = signal<Task[]>(getTaskBoard());
export const activeTask = signal<Task | null>(null);


// Fetch tasks from local storage
function getTaskBoard() {
  const value = localStorage.getItem(LOCAL_STORAGE_TASKS);
  if (value == null) return [];
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(tasks.value));
});
