const initialState = [
  {
    title: "title-1",
    tasks: [
      "task 1-1",
      "task 1-2",
    ],
  },
  {
    title: "title-2",
    tasks: [
      "task 2-1",
      "task 2-2",
      "task 2-3",
    ],
  },
];

export const reducerColumns = (state = initialState, { type, payload }) => {
  switch (type) {
    case "COLUMN:ADD":
      return [...state, { title: payload.title || "title", tasks: [] }];
    default:
      return state;
  }
};
