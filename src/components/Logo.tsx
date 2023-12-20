import logo from "../assets/logo.svg";

export const Logo = () => {
  return (
    <div className="flex items-center hover:opacity-75 transition gap-x-2">
      <img src={logo} alt="Logo" height={30} width={30} />
      <p className="text-lg text-neutral-700 pb-1 font-bold">Flexilist</p>
    </div>
  );
};
