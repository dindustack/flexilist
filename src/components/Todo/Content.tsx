import { TodoContainer } from "./Container";
import { TodoSidebar } from "./Sidebar";

export const TodoContent = () => {
  return (
    <TodoContainer>
      <main className="w-full flex flex-row">
        <div className="w-[30%]"><TodoSidebar /></div>
        <div className="w-[70%]">dagvsgsgq</div>
      </main>
    </TodoContainer>
  );
}
