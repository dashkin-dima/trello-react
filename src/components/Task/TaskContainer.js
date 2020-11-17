import React from "react";
import TaskComponent from "./TaskComponent";

const TaskContainer = ({ text }) => {
  return (
    <div>
      <TaskComponent text={text} />
    </div>
  );
};

export default TaskContainer;
