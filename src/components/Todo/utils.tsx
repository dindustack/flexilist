import { effect, signal } from "@preact/signals-react";
import { Section } from "../../types";

export const sections = signal<Section[]>([]);

const LOCAL_STORAGE_KEY = "TODO_BOARD";

// Initialize todos
const todoBoard = signal(getTodoBoard());
console.log("yarn", todoBoard);
// const newTodoName = signal("");

// Fetch todos from local storage
function getTodoBoard() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (value == null) return [];
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sections.value));
});
