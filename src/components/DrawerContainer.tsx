import React, { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "./Button";
import { tasks } from "../Utils/task";
import { sections } from "../Utils/sections";
import { Id } from "../types";

export default function DrawerContainer() {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const getTaskLengthForSection = (sectionId: Id) => {
    return tasks.value.filter((task) => task.sectionId === sectionId).length;
  };

  const completedCount = sections.value.map((section) => section);

  const shouldDisplayMessage = completedCount.length === 0;

  return (
    <>
      <Button shadow
        onClick={() => {
          setIsDrawerActive(true);
        }}
      >
        Click for Summary
      </Button>

      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <div className="flex flex-col text-black gap-4">
          <h2 className="text-center pt-4 text-[1.5rem] text-bold">Summary</h2>
          {shouldDisplayMessage ? (
            <div className="pt-40 flex flex-col justify-center items-center">
              <p className="text-[1rem] text-bold">
                Create a task to see summary!
              </p>
            </div>
          ) : (
            React.Children.toArray(
              sections.value.map((section) => (
                <div className="flex flex-row justify-between gap-x-32 items-center p-4  border-b-2 border-b-black">
                  <span className="inline-block font-bold text-[1.25rem]">
                    {section.title}
                  </span>
                  <span className="inline-block px-4 py-2 text-[1rem] bg-[#514ffe] font-bold text-white rounded-[30px]">
                    {getTaskLengthForSection(section.id)}
                  </span>
                </div>
              ))
            )
          )}
        </div>
      </Drawer>
    </>
  );
}
