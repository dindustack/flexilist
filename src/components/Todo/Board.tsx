import { signal } from "@preact/signals-react";
import { Section } from "../../types";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import React from "react";
import { sections } from "./utils";
import { Button } from "../Button";

// const LOCAL_STORAGE_KEY = "TODOS";

// Initialize todos
// const todos = signal(getTodos());
// const newTodoName = signal("");

// Fetch todos from local storage
// function getTodos() {
//   const value = localStorage.getItem(LOCAL_STORAGE_KEY);
//   if (value == null) return [];
//   return JSON.parse(value);
// }

// effect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value));
// });

console.log("sections", sections);

function createNewSection() {
  const sectionToAdd: Section = {
    id: crypto.randomUUID(),
    title: `Section ${sections.value.length + 1}`,
  };

  sections.value = [...sections.value, sectionToAdd];
}

export function TodoBoard() {
  // function addTodo() {
  //   todos.value = [
  //     ...todos.value,
  //     { id: crypto.randomUUID(), name: newTodoName.value },
  //   ];
  //   newTodoName.value = ""; // Reset input value on add
  // }

  // const onInput = (event: React.FormEvent<HTMLInputElement>) =>
  //   (newTodoName.value = event.target.value);
  return (
    // <div className="">
    //   <div className="flex flex-col">
    //     <div className="mb-4">
    //       <Input
    //         placeholder="Enter task name"
    //         value={newTodoName?.value}
    //         onInput={onInput}
    //       />
    //       <Button onClick={addTodo}>Add Todo</Button>

    //     </div>
    //     <ul>
    //       {React.Children.toArray(
    //         todos.value.map((todo) => (
    //           <li className="text-black">{todo.name}</li>
    //         ))
    //       )}
    //     </ul>
    //   </div>
    // </div>
    <div className="flex flex-row">
      {React.Children.toArray(
        sections.value.map((section) => <div>{section.title}</div>)
      )}
      {/* <Button onClick={createNewSection} rounded hover shadow outline border>
        <PlusIcon />
        New Board
      </Button> */}
      <button
        role="button"
        aria-label="Click to perform an action"
        onClick={createNewSection}
        className="
          flex  
          h-[60px]
          w-[350px]
          min-w-[350px] 
          cursor-pointer 
          items-center 
          rounded-md 
          border-2 
          border-black 
          bg-[#e9affc] 
          px-10 
          py-3 
          font-bold 
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
          transition-all hover:translate-x-[3px] 
          hover:translate-y-[3px] 
          hover:shadow-none"
      >
        <PlusIcon />
        New Board
      </button>
    </div>
  );
};
