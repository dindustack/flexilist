import { Button } from "./Button";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav
      className="
        fixed 
        top-0 
        w-full 
        h-14
        border-b 
        border-b-black
        flex 
        items-center 
        py-10 
        px-4"
    >
      <div className="md:max-w-screen-2xl mx-auto flex justify-between items-center w-full ">
        <Logo />
      </div>
    </nav>
  );
};
