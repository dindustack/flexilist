import { Section } from "../../types";

type TodoSectionProps = {
  title: Section["title"]
}

export const TodoSection = ({title}: TodoSectionProps) => {
  // const title = sections.value.map((section) => section.title)
  return (
    <div
      className="
        bg-white
        [w-350px]
        [h-500px]
        max-h-[500px]
        rounded-md 
        border-2 
        border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        roun
    "
    >
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{title}</h2>
      </div>
    </div>
  );
};
