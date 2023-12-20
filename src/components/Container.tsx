import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TodoContainer } from "./Todo/Container";
import DrawerContainer from "./DrawerContainer";

export const Container = () => {
  

  return (
    <div>
      <Navbar />
      <div id="drawer"></div>
      <main className="pt-20 pb-20">
        <TodoContainer />
        <div className="fixed bottom-20 md:bottom-24 right-8">
          <DrawerContainer />
        </div>
      </main>

      <Footer />
    </div>
  );
};
