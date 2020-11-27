import React, { useState } from "react";
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
  const [showForm, setShowForm] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const addTask = () => {
    onAddTask(columnIndex, valueInput);
    setValueInput("");
    setShowForm(false);
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
      {showForm ? (
        <div className="column__add-form add-form">
          <textarea
            className="add-form__input"
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <div className="add-form__button-add" onClick={addTask}>
            add
          </div>
          <div
            className="add-form__button-cancel"
            onClick={() => setShowForm(false)}
          >
            cancel
          </div>
        </div>
      ) : (
        <div
          className="column__button-add-task"
          onClick={() => setShowForm(true)}
        >
          ADD
        </div>
      )}
    </div>
  );
};

export default ColumnComponent;
