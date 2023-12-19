import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TodoBoard } from "./Board";
import { arrayMove } from "@dnd-kit/sortable";
import { activeSection, sections } from "../../Utils/sections";
import { activeTask, tasks } from "../../Utils/task";
import { Drawer } from "../Drawer";
import { Button } from "../Button";
import { useState } from "react";

export const TodoContainer = () => {

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Section") {
      activeSection.value = event.active.data.current.section;
      return;
    }

    if (event.active.data.current?.type === "Task") {
      activeTask.value = event.active.data.current.task;
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    // When onDrayEnd ends remove dragOverlay component
    activeSection.value = null;
    activeTask.value = null;

    const { active, over } = event;
    if (!over) return;

    const activeSectionId = active.id;
    const overSectionId = over.id;

    if (activeSectionId === overSectionId) return;

    function draggedSection() {
      // Find the index of the active section in the sections array
      const activeSectionIndex = sections.value.findIndex(
        (section) => section.id === activeSectionId
      );

      // Find the index of the section to swap with in the sections array
      const overSectionIndex = sections.value.findIndex(
        (section) => section.id === overSectionId
      );

      // Swap the active column index with over column index
      return arrayMove(sections.value, activeSectionIndex, overSectionIndex);
    }

    sections.value = draggedSection();
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeTaskId = active.id;
    const overTaskId = over.id;

    if (activeTaskId === overTaskId) return;

    // Drop Task over another task in same section
    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    function draggedTask() {
      const activeIndex = tasks.value.findIndex(
        (task) => task.id === activeTaskId
      );
      const overIndex = tasks.value.findIndex((task) => task.id === overTaskId);

      tasks.value[activeIndex].sectionId = tasks.value[overIndex].sectionId;

      return arrayMove(tasks.value, activeIndex, overIndex);
    }

    if (isActiveTask && isOverTask) {
      tasks.value = draggedTask();
    }

    // Drop Task over another task in a different section
    const isOverSection = over.data.current?.type === "Section";

    function draggedTaskOverSections() {
      const activeIndex = tasks.value.findIndex(
        (task) => task.id === activeTaskId
      );

      tasks.value[activeIndex].sectionId = overTaskId;

      return arrayMove(tasks.value, activeIndex, activeIndex);
    }

    if (isActiveTask && isOverSection) tasks.value = draggedTaskOverSections();
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  return (
    <div className="overflow-hidden mb-24">
      <div
        className="
          w-full 
          min-h-screen 
          flex 
          pt-8
          md:pt-16
          overflow-x-auto
          overflow-y-hidden
          px-[2.5rem]
          "
      >
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          <TodoBoard />
        </DndContext>
      </div>
      
    </div>
  );
};
