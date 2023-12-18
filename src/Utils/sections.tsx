import { effect, signal } from "@preact/signals-react";
import { Section } from "../types";

const LOCAL_STORAGE_KEY = "TODO_BOARD";

export const activeSection = signal<Section | null>(null);

export const sections = signal<Section[]>(getTodoBoard());

// Fetch todos from local storage
function getTodoBoard() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (value == null) return [];
  return JSON.parse(value);
}

effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sections.value));
});
