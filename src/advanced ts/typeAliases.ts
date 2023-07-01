type Students = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
};

let students: Students = {
  // anotate the type from the type alias
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};
