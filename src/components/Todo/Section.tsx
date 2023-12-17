import { sections } from "./utils";

export const TodoSection = () => {
  return (
    <>
      {sections.value.map((section) => (
        <div key={section.id}>{section.title}</div>
      ))}
    </>
  );
};
