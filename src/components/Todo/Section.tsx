import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Delete } from "../../assets/icons/Delete";
import { Section, Id } from "../../types";
import { signal } from "@preact/signals-react";
import Input from "./Input";

type TodoSectionProps = {
  section: Section;
  deleteSection: (id: Id) => void;
  updateSectionTitle: (id: Id, title: string) => void;
};

const editMode = signal<boolean>(false);

export const TodoSection = (props: TodoSectionProps) => {
  const { section, deleteSection, updateSectionTitle } = props;

  const handleEditMode = () => {
    editMode.value = true;
  };

  const falseEditMode = () => {
    editMode.value = false;
  };

  const handleEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    editMode.value = false;
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSectionTitle(section.id, event.target.value);
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
    disabled: editMode.value,
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
            !editMode.value && `bg-[#514ffe]`
          } text-white rounded-lg px-4 py-2 text-lg`}
        >
          {!editMode.value && section.title}
          {editMode.value && (
            <Input
              value={section.title}
              onInput={handleTitleChange}
              placeholder="Type..."
              onBlur={() => {
                falseEditMode;
              }}
              onKeyDown={handleEnterClick}
            />
          )}
        </span>
        <button onClick={() => deleteSection(section.id)}>
          <Delete />
        </button>
      </div>
    </div>
  );
};
