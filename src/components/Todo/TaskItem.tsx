import { signal } from "@preact/signals-react";
import { Delete } from "../../assets/icons/Delete";
import { Task } from "../../types";
import { useState } from "react";

type Props = {
  task: Task;
};

export function TaskItem({ task }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const handleMouseLeave = () => {
    setMouseIsOver(false);
  };

  const handleMouseEnter = () => {
    setMouseIsOver(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        font-bold"
    >
      <span className="inline-block text-lg">{task.content}</span>
      {mouseIsOver && (
        <button
          className="
          stroke-white
          absolute
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
