import React from "react";
import { createPortal } from "react-dom";
import { SortableContext } from "@dnd-kit/sortable";
import { computed } from "@preact/signals-react";
import { DragOverlay } from "@dnd-kit/core";
import { Id, Section } from "../../types";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { activeSection, sections } from "./utils";
import { TodoSection } from "./Section";

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
}

// Update sections title
function updateSectionTitle(id: Id, title: string) {
  const updatedSections = sections.value.map((section) => {
    if (section.id !== id) return section;
    return { ...section, title };
  });
  sections.value = updatedSections;
}

const sectionId = sections.value.map((section) => section.id);

export function TodoBoard() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <SortableContext items={sectionId}>
            {React.Children.toArray(
              sections.value.map((section) => (
                <TodoSection
                  section={section}
                  deleteSection={deleteSection}
                  updateSectionTitle={updateSectionTitle}
                />
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
              updateSectionTitle={updateSectionTitle}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </>
  );
}
