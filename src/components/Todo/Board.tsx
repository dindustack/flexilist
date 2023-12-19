import React from "react";
import { createPortal } from "react-dom";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay } from "@dnd-kit/core";
import { Id, Section, Task } from "../../types";
import { TodoSection } from "./Section";
import { activeSection, sections } from "../../Utils/sections";
import { Button } from "../Button";
import { activeTask, tasks } from "../../Utils/task";
import { TodoTaskItem } from "./TaskItem";

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

    const filteredTasks = tasks.value.filter((task) => task.sectionId !== id);
    tasks.value = filteredTasks;
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
      content: "Create task",
    };

    tasks.value = [...tasks.value, newTask];
  }

  // Delete tasks based on Id
  function deleteTask(id: Id) {
    const filteredTasks = tasks.value.filter((task) => task.id !== id);
    tasks.value = filteredTasks;
  }

  // update tasks content by Id
  function updateTask(id: Id, content: string) {
    const updatedTasks = tasks.value.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    tasks.value = updatedTasks;
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
                  deleteTask={deleteTask}
                  updateTask={updateTask}
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
              deleteTask={deleteTask}
              updateTask={updateTask}
              tasks={tasks.value.filter(
                (task) => task.sectionId === activeSection.value?.id
              )}
            />
          )}
          {activeTask.value && (
            <TodoTaskItem
              task={activeTask.value}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          )}
        </DragOverlay>,
        document.body
      )}
    </>
  );
}
