import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TodoContainer } from "./Todo/Container";

export const Container = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 pb-20">
        <TodoContainer  />
      </main>

      <Footer />
    </div>
  );
};
