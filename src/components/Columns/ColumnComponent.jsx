import React from "react";
import { v4 as uuid } from "uuid";

import Task from "../Task";
import "./Column.scss";
const ColumnComponent = ({
  title,
  tasks,
  onAddTask,
  columnIndex,
  provided,
}) => {
  const addTask = () => {
    onAddTask(columnIndex, "task-1");
  };
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className="column"
    >
      <div className="column__header">{title}</div>
      <div className="column__list-task">
        {tasks.map((task, taskIndex) => (
          <Task
            className="column__task"
            key={uuid()}
            text={task}
            columnIndex={columnIndex}
            taskIndex={taskIndex}
          />
        ))}
      </div>
      <div className="column__button-add-task" onClick={addTask}>
        ADD
      </div>
    </div>
  );
};

export default ColumnComponent;
