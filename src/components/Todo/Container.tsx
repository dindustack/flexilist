import { TodoBoard } from "./Board";

export const TodoContainer = () => {
  return (
    <div className="overflow-hidden mb-24">
      <div
        className="
          w-full 
          min-h-screen 
          flex 
          pt-16
          overflow-x-auto
          overflow-y-hidden
          px-[2.5rem]
          "
      >
        <TodoBoard />
      </div>
    </div>
  );
};
