import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Task from "../Task";
import "./Column.scss";
import deleteLogo from "../../assets/x.svg";

const ColumnComponent = ({
  title,
  tasks,
  onAddTask,
  columnIndex,
  provided,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const deleteColumn = () => {};
  const addTask = () => {
    if (valueInput) {
      onAddTask(columnIndex, valueInput);
      setValueInput("");
      setShowForm(false);
    } else {
      alert("enter task");
    }
  };
  return (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      className="column"
    >
      <div className="column__header">
        {title}{" "}
        <img
          className="column__button-delete"
          src={deleteLogo}
          onClick={deleteColumn}
          alt="delete"
        />
      </div>
      <div className="column__list-tasks">
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
        <div className="column__add-form">
          <textarea
            className="column__input"
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <div className="column__buttons-form">
            <div className="column__button-add" onClick={addTask}>
              add task
            </div>
            <div
              className="column__button-cancel"
              onClick={() => setShowForm(false)}
            >
              cancel
            </div>
          </div>
        </div>
      ) : (
        <div
          className="column__button-show-form"
          onClick={() => setShowForm(true)}
        >
          add task
        </div>
      )}
    </div>
  );
};

export default ColumnComponent;
