type ButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  rounded?: boolean;
  shadow?: boolean;
  hover?: boolean;
  border?: boolean;
  outline?: boolean;
  colored?: boolean;
};

export function Button({
  children,
  border,
  hover,
  outline,
  onClick,
  rounded,
  colored,
  shadow,
}: ButtonProps) {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className={`
        flex 
        cursor-pointer 
        items-center 
         ${colored && "!bg-[#e9affc]"}
         

         ${rounded ? "rounded-full" : "rounded-[1.875rem]"}
         ${outline ? "bg-white text-black" : "bg-black text-white"}
         ${rounded ? "rounded-full" : "rounded-[1.875rem]"}
         ${shadow ? "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "shadow-none"}
         ${border ? "border-2" : "border"}
         ${hover && "hover:translate-x-[3px] hover:translate-y-[3px]"}
        rounded-full 
        border-2 
        border-black 
        px-10
        py-3 
        font-bold  
        transition-all 
        hover:shadow-none
        `}
    >
      {children}
    </button>
  );
}
