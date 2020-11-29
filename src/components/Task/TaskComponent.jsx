import React from "react";
import "./Task.scss";
import deleteLogo from "../../assets/x.svg";

const TaskComponent = ({
  text,
  columnIndex,
  taskIndex,
  className,
  onDeleteTask,
  provided,
}) => {
  const deleteTask = () => {
    onDeleteTask(columnIndex, taskIndex);
  };
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={"task"}
    >
      <div className="task__text">{text}</div>
      <img
        className="task__button-delete"
        src={deleteLogo}
        onClick={deleteTask}
        alt="delete"
      />
    </div>
  );
};

export default TaskComponent;
