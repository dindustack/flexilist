import { Task } from "../../types";

type Props = {
  task: Task;
};
export function TaskItem({ task }: Props) {
  return (
    <div
      className="
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
      <h2 className="text-lg">{task.content}</h2>
    </div>
  );
}
