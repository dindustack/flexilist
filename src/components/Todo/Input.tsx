type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input(props: Props) {
  const { value, onChange, onBlur, onKeyDown, placeholder } = props;
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
        focus:border-[#514ffe]
      "
      autoFocus
      type="text"
      name="text"
      id="text"
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      aria-label={placeholder}
    />
  );
}
