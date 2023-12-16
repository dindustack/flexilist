import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TodoContent } from "./Todo/Content";

export const Container = () => {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20 px-4 md:px-24">
        <TodoContent />
      </main>
      <Footer />
    </>
  );
};
