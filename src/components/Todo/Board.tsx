import React from "react";
import { SortableContext } from "@dnd-kit/sortable";
import { Id, Section } from "../../types";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { activeSection, sections } from "./utils";
import { TodoSection } from "./Section";
import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { createPortal } from "react-dom";

function createNewSection() {
  const sectionToAdd: Section = {
    id: crypto.randomUUID(),
    title: `Section ${sections.value.length + 1}`,
  };

  sections.value = [...sections.value, sectionToAdd];
}

// Delete sections based on Id
function deleteSection(id: Id) {
  const filteredSections = sections.value.filter(
    (section) => section.id !== id
  );
  sections.value = filteredSections;
  console.log("active");
}

const sectionId = sections.value.map((section) => section.id);

export function TodoBoard() {
  function onDragStart(event: DragStartEvent) {
    console.log("DragSatrt", event);
    if (event.active.data.current?.type === "Section") {
      activeSection.value = event.active.data.current.section;
      console.log("yarn", event);
      return;
    }
  }
  return (
    <DndContext onDragStart={onDragStart}>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <SortableContext items={sectionId}>
            {React.Children.toArray(
              sections.value.map((section) => (
                <TodoSection section={section} deleteSection={deleteSection} />
              ))
            )}
          </SortableContext>
        </div>

        <button
          role="button"
          aria-label="Click to perform an action"
          onClick={() => {
            createNewSection();
          }}
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
          gap-2
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
      {createPortal(
        <DragOverlay>
          {activeSection.value && (
            <TodoSection
              section={activeSection.value}
              deleteSection={deleteSection}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}
