const initialState = [
  {
    title: "title-1",
    tasks: ["task 1-1", "task 1-2"],
  },
  {
    title: "title-2",
    tasks: [
      "task 2-1",
      "task 2-2",
      "task 2-3",
      "task 2-4",
      "task 2-5",
      "task 2-6",
    ],
  },
];

export const reducerColumns = (state = initialState, { type, payload }) => {
  switch (type) {
    case "COLUMN:ADD":
      return [...state, { title: payload.title, tasks: [] }];
    case "TASK:ADD":
      return state.map((column, index) => {
        if (index === payload.columnIndex)
          return { ...column, tasks: [...column.tasks, payload.task] };
        return column; 
      });
    case "TASK:DELETE":
      return state.map((column, index) => {
        if (index === payload.columnIndex) {
          return {
            ...column,
            tasks: column.tasks.filter(
              (_, index) => index !== payload.taskIndex
            ),
          };
        }
        return column;
      });
    case "TASK:REORDER":
      let newColumn = state[payload.columnIndex];
      newColumn.tasks.splice(
        payload.endTaskIndex,
        0,
        newColumn.tasks.splice(payload.startTaskIndex, 1)[0]
      );

      return state.map((column, index) =>
        index === payload.columnIndex ? newColumn : column
      );
    case "TASK:MOVE":
      let newState = state;

      let moveTask = newState[payload.startColumnIndex].tasks.splice(
        payload.startTaskIndex,
        1
      );
      newState[payload.endColumnIndex].tasks.splice(
        payload.endTaskIndex,
        0,
        moveTask
      );

      return newState;
    default:
      return state;
  }
};
