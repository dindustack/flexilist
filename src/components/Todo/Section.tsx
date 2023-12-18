import { Delete } from "../../assets/icons/Delete";
import { Section, Id } from "../../types";

type TodoSectionProps = {
  title: Section["title"];
  id: Id;
  deleteSection: (id: Id) => void;
};

export const TodoSection = (props: TodoSectionProps) => {
  const { title, id, deleteSection } = props;

  return (
    <div
      className="
        w-[350px]
        [h-550px]
        max-h-[550px]
        rounded-md 
        border-2 
        border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    "
    >
      {/* Section Title */}
      <div
        className="
          flex
          items-center
          justify-between
          text-md
          h-[3.75rem]
          cursor-grab
          p-3
          font-bold
          border-b-black
          border-b-2
        "
      >
        <span className="inline-block bg-[#514ffe] text-white rounded-lg px-4 py-2 text-lg">
          {title}
        </span>
        <button onClick={() => deleteSection(id)}>
          <Delete />
        </button>
      </div>
    </div>
  );
};
