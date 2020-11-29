import React from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import { tasksActions } from "../../actions";
import TaskComponent from "./TaskComponent";

const TaskContainer = ({
  key,
  text,
  columnIndex,
  taskIndex,
  deleteTask,
}) => {
  return (
    <Draggable
      key={key}
      draggableId={`task-${columnIndex}-${taskIndex}`}
      index={taskIndex}
    >
      {(provided, snapshot) => (
        <TaskComponent
          provided={provided}
          text={text}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          onDeleteTask={deleteTask}
        />
      )}
    </Draggable>
  );
};

const mapDispatchToProps = {
  deleteTask: tasksActions.delete,
};

export default connect(null, mapDispatchToProps)(TaskContainer);
