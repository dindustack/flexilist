type Props = {
  value: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input(props: Props) {
  const { value, onInput, onBlur, onKeyDown, placeholder } = props;
  return (
    <input
      className="
        rounded-md 
        border-2 
        border-black 
        p-[10px] 
        text-black
        font-bold 
        outline-none 
      "
      autoFocus
      type="text"
      name="text"
      id="text"
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onInput={onInput}
      onKeyDown={onKeyDown}
      aria-label={placeholder}
    />
  );
}
