export type Id = string | number;

export type Section = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  sectionId: Id;
  content: string;
};
