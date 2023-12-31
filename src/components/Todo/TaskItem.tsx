import { useSortable } from "@dnd-kit/sortable";
import { Delete } from "../../assets/icons/Delete";
import { Id, Task } from "../../types";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type Props = {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
};

export function TodoTaskItem(props: Props) {
  const { task, deleteTask, updateTask } = props;
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  const handleMouseLeave = () => {
    setMouseIsOver(false);
  };

  const handleMouseEnter = () => {
    setMouseIsOver(true);
  };

  

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateTask(task.id, event.target.value);
  };

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="
        relative
        bg-white
        p-2.5
        h-[6.25rem]
        min-h-[6.25rem]
        items-center
        flex
        text-left
        rounded-xl
        border-2
        cursor-grab
        border-black
        "
      >
        <textarea
          className="
          h-[90%]
          w-full
          resize-none
          bg-white
          p-[10px]    
          outline-none
          "
          autoFocus
          placeholder="Type..."
          value={task.content}
          onBlur={toggleEditMode}
          onChange={handleContentChange}
        ></textarea>
      </div>
    );
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        relative
        task
        bg-[#f5f5fa] 
        px-2.5 
        py-1
        h-[6.25rem] 
        min-h-[6.25rem]
        items-center
        flex
        text-left
        rounded-xl
        border-dashed
        border-2
        cursor-grab
        border-black 
        "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        task
        bg-[#FBF4EF] 
        px-2.5 
        py-1
        h-[6.25rem] 
        min-h-[6.25rem]
        items-center
        flex
        text-left
        rounded-xl
        border-2
        cursor-grab
        border-black 
        "
    >
      <p
        className="
          my-auto 
          w-full 
          overflow-y-auto 
          overflow-x-hidden 
          whitespace-pre-wrap 
          h-[90%] 
          text-[1rem]"
      >
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="
          stroke-white
          absolute
          z-10
          right-4
          top-1/2
          -translate-y-1/2
          "
          role="button"
          aria-label="Click to delete task"
        >
          <Delete />
        </button>
      )}
    </div>
  );
}
