export const TodoSidebar = () => {
  return (
    <aside className="fixed border-r-black border-r-2 text-white h-screen ">
      <div className="flex flex-col text-black">
        <div className="flex flex-row justify-between gap-x-32 items-center p-4  border-b-2 border-b-black">
          <span className="inline-block font-bold text-[1.25rem]">Todo</span>
          <span className="inline-block px-4 py-2 text-[1rem] bg-black font-bold text-white rounded-[30px]">
            3
          </span>
        </div>
        <div className="flex flex-row justify-between items-center p-4  border-b-2 border-b-black">
          <span className="inline-block font-bold text-[1.25rem]">Started</span>
          <span className="inline-block px-4 py-2 text-[1rem]  bg-black font-bold text-white rounded-[30px]">
            3
          </span>
        </div>
        <div className="flex flex-row justify-between items-center p-4  border-b-2 border-b-black">
          <span className="inline-block font-bold text-[1.25rem]">
            Completed
          </span>
          <span className="inline-block px-4 py-2 text-[1rem] bg-black font-bold text-white rounded-[30px]">
            3
          </span>
        </div>
      </div>
    </aside>
  );
};
