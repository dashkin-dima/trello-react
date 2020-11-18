import React from "react";
import "./Task.scss";

const TaskComponent = ({
  text,
  columnIndex,
  taskIndex,
  className,
  onDeleteTask,
}) => {
  const deleteTask = () => {
    onDeleteTask(columnIndex, taskIndex);
  };
  return (
    <div className={`${className} task`}>
      <div className="task__text">{text}</div>
      <div className="task__button-delete" onClick={deleteTask}>delete</div>
    </div>
  );
};

export default TaskComponent;
