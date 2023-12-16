type IContainer = {
  children: React.ReactNode;
};

export const TodoContainer = ({ children }: IContainer) => {
  return <>{children}</>;
};
