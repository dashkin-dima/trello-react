export const columnsActions = {
  add: (title) => ({
    type: "COLUMN:ADD",
    payload: { title },
  }),
  delete: (columnIndex) => ({
    type: "COLUMN:DELETE",
    payload: { columnIndex },
  }),
};
