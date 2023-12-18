import React from "react";
import { createPortal } from "react-dom";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay } from "@dnd-kit/core";
import { Id, Section, Task } from "../../types";
import { TodoSection } from "./Section";
import { activeSection, sections } from "../../Utils/sections";
import { Button } from "../Button";
import { tasks } from "../../Utils/task";

export function TodoBoard() {
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

  // ----------- TASKS ------------- \\
  function createTask(sectionId: Id) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      sectionId,
      content: "Item",
    };

    tasks.value = [...tasks.value, newTask];
  }

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
                  createTask={createTask}
                  tasks={tasks.value.filter(
                    (task) => task.sectionId === section.id
                  )}
                />
              ))
            )}
          </SortableContext>
        </div>

        <Button onClick={createNewSection}>New Board</Button>
      </div>
      {createPortal(
        <DragOverlay>
          {activeSection.value && (
            <TodoSection
              section={activeSection.value}
              deleteSection={deleteSection}
              updateSectionTitle={updateSectionTitle}
              createTask={createTask}
              tasks={tasks.value.filter(
                (task) => task.sectionId === activeSection.value?.id
              )}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </>
  );
}
