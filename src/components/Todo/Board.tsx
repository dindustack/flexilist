import { Section } from "../../types";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import React from "react";
import { sections } from "./utils";
import { TodoSection } from "./Section";

// Initialize todos
function createNewSection() {
  const sectionToAdd: Section = {
    id: crypto.randomUUID(),
    title: `Section ${sections.value.length + 1}`,
  };

  sections.value = [...sections.value, sectionToAdd];
}

export function TodoBoard() {
  return (
    <div className="flex gap-4">
      <div className="flex gap-4">
        {React.Children.toArray(
          sections.value.map((section) => <TodoSection title={section.title} />)
        )}
      </div>

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
}
