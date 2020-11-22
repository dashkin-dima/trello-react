export const tasksActions = {
  add: (columnIndex, task) => ({
    type: "TASK:ADD",
    payload: { columnIndex, task },
  }),
  delete: (columnIndex, taskIndex) => ({
    type: "TASK:DELETE",
    payload: { columnIndex, taskIndex },
  }),
  move: (columnIndex, taskIndex, droppableColumnIndex, droppableTaskIndex) => ({
    type: "TASK:MOVE",
    payload: {
      columnIndex,
      taskIndex,
      droppableColumnIndex,
      droppableTaskIndex,
    },
  }),
  reorder: (columnIndex, startTaskIndex, endTaskIndex) => ({
    type: "TASK:REORDER",
    payload: { columnIndex, startTaskIndex, endTaskIndex },
  }),
};
