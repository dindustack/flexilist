import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TodoContent } from "./Todo/Content";

export const Container = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-grow-[1] pt-20 pb-20">
        <TodoContent />
      </div>
      
      <Footer />
    </div>
  );
};
