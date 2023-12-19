import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Delete } from "../../assets/icons/Delete";
import { Section, Id, Task } from "../../types";
import Input from "./Input";
import { Button } from "../Button";
import React, { useMemo, useState } from "react";
import { TodoTaskItem } from "./TaskItem";

type TodoSectionProps = {
  section: Section;
  deleteSection: (id: Id) => void;
  updateSectionTitle: (id: Id, title: string) => void;

  createTask: (sectionId: Id) => void;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
  tasks: Task[];
};

export const TodoSection = (props: TodoSectionProps) => {
  const {
    section,
    deleteSection,
    updateSectionTitle,
    createTask,
    updateTask,
    tasks,
    deleteTask,
  } = props;

  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const falseEditMode = () => {
    setEditMode(false);
  };

  const handleEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    setEditMode(false);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionTitle(section.id, event.target.value);
  };

  const handleCreateTask = (id: Id) => {
    createTask(id);
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
    data: {
      type: "Section",
      section,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        w-[21.875rem]
        h-[34.375rem]
        bg-[#FBF4EF]
        max-h-[550px]
        rounded-md 
        border-dashed
        border-2
        border-black 
    "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
        w-[21.875rem]
        h-[34.375rem]
        bg-white
        max-h-[550px]
        rounded-md
        flex
        flex-col 
        border-2 
        border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    "
    >
      {/* Section Title */}
      <div
        {...attributes}
        {...listeners}
        onClick={handleEditMode}
        className="
          flex
          items-center
          justify-between
          text-md
          h-[3.75rem]
          bg-white
          cursor-grab
          p-3
          font-bold
          border-b-black
          border-b-2
        "
      >
        <span
          className={`inline-block ${
            !editMode && `bg-[#514ffe]`
          } text-white rounded-lg px-4 py-2 text-lg`}
        >
          {!editMode && section.title}
          {editMode && (
            <Input
              value={section.title}
              onInput={handleTitleChange}
              placeholder="Type..."
              onBlur={() => {
                falseEditMode();
              }}
              onKeyDown={handleEnterClick}
            />
          )}
        </span>
        <button onClick={() => deleteSection(section.id)}>
          <Delete />
        </button>
      </div>
      {/* Section Content */}
      <div
        className="
          flex 
          flex-grow 
          flex-col 
          gap-4 
          p-2 
          overflow-x-hidden 
          overflow-y-auto
          "
      >
        <SortableContext items={tasksIds}>
          {React.Children.toArray(
            tasks.map((task) => (
              <TodoTaskItem
                task={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))
          )}
        </SortableContext>
      </div>
      {/* Section footer */}
      <Button
        onClick={() => {
          handleCreateTask(section.id);
        }}
      >
        Add New Task
      </Button>
    </div>
  );
};
