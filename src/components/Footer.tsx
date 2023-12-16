import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer
      className="
        fixed
        bottom-0   
        w-full
        border-t 
        border-t-black
        flex 
        items-center 
        py-4 
        px-4"
    >
      <div className="md:max-w-screen-2xl mx-auto flex justify-between items-center w-full ">
        <Logo />
        <span className="text-black font-semibold text-[0.875rem]">
          Terms and Conditions
        </span>
      </div>
    </footer>
  );
};
