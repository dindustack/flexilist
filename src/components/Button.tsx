import { PlusIcon } from "../assets/icons/PlusIcon";

type ButtonProps = {
  children: React.ReactNode;
  icon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button(props: ButtonProps) {
  const { children, onClick, icon } = props;
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className="
        flex  
        h-[60px]
        w-[345px]
        min-w-[345px] 
        cursor-pointer 
        items-center 
        rounded-md 
        border-2 
        border-black 
        bg-[#e9affc] 
        px-10 
        py-3 
        gap-2
        font-bold 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        transition-all hover:translate-x-[3px] 
        hover:translate-y-[3px] 
        hover:shadow-none"
    >
      {icon && <PlusIcon />}
      {children}
    </button>
  );
}
