type IContainer = {
  children: React.ReactNode;
};

export const TodoContainer = ({ children }: IContainer) => {
  return <div className="overflow-hidden mb-24  ">{children}</div>;
};
