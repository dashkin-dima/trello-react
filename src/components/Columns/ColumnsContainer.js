import React, { Fragment } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

import AddColumnForm from "../AddColumnForm";
import ColumnComponent from "./ColumnComponent";
import { tasksActions, columnsActions } from "../../actions";

const ColumnsContainer = ({
  columns,
  addTask,
  reorderTask,
  moveTask,
  deleteColumn,
}) => {
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId)
      reorderTask(source.droppableId, source.index, destination.index);
    else
      moveTask(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index
      );
  };
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, index) => (
          <Droppable key={uuid()} droppableId={`${index}`}>
            {(provided, snapshot) => (
              <ColumnComponent
                provided={provided}
                key={uuid()}
                {...column}
                columnIndex={index}
                onAddTask={addTask}
                onDeleteColumn={deleteColumn}
              />
            )}
          </Droppable>
        ))}
      </DragDropContext>
      <AddColumnForm />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProps = {
  addTask: tasksActions.add,
  reorderTask: tasksActions.reorder,
  moveTask: tasksActions.move,
  deleteColumn: columnsActions.delete,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);
