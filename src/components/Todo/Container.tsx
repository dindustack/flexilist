import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TodoBoard } from "./Board";
import { arrayMove } from "@dnd-kit/sortable";
import { activeSection, sections } from "../../Utils/sections";

export const TodoContainer = () => {
  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Section") {
      activeSection.value = event.active.data.current.section;
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
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
        >
          <TodoBoard />
        </DndContext>
      </div>
    </div>
  );
};
