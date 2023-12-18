import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Delete } from "../../assets/icons/Delete";
import { Section, Id } from "../../types";

type TodoSectionProps = {
  section: Section;
  deleteSection: (id: Id) => void;
};

export const TodoSection = (props: TodoSectionProps) => {
  const { section, deleteSection } = props;

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
        <span className="inline-block bg-[#514ffe] text-white rounded-lg px-4 py-2 text-lg">
          {section.title}
        </span>
        <button onClick={() => deleteSection(section.id)}>
          <Delete />
        </button>
      </div>
    </div>
  );
};
