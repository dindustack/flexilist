type Props = {
  value: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
  placeholder: string;
};

export default function Input({ value, onInput, placeholder }: Props) {
  return (
    <input
      className="
        rounded-md 
        border-2 
        border-black 
        p-[10px] 
        font-bold 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        outline-none 
        transition-all 
        focus:translate-x-[3px] 
        focus:translate-y-[3px] 
        focus:shadow-none"
      type="text"
      name="text"
      id="text"
      placeholder={placeholder}
      value={value}
      onInput={onInput}
      aria-label={placeholder}
    />
  );
}
