export const tasksActions = {
  add: (columnIndex, task) => ({
    type: "TASK:ADD",
    payload: { columnIndex, task },
  }),
  delete: (columnIndex, taskIndex) => ({
    type: "TASK:DELETE",
    payload: { columnIndex, taskIndex },
  }),
  move: (startColumnIndex, startTaskIndex, endColumnIndex, endTaskIndex) => ({
    type: "TASK:MOVE",
    payload: {
      startColumnIndex,
      startTaskIndex,
      endColumnIndex,
      endTaskIndex,
    },
  }),
  reorder: (columnIndex, startTaskIndex, endTaskIndex) => ({
    type: "TASK:REORDER",
    payload: { columnIndex, startTaskIndex, endTaskIndex },
  }),
};
