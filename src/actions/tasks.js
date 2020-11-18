export const tasksActions = {
  addTask: (columnIndex, task) => ({
    type: "TASK:ADD",
    payload: { columnIndex, task },
  }),
  deleteTask: (columnIndex, taskIndex) => ({
    type: "TASK:DELETE",
    payload: { columnIndex, taskIndex },
  }),
};
