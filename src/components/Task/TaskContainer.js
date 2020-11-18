import React from "react";
import { connect } from "react-redux";
import { tasksActions } from "../../actions";
import TaskComponent from "./TaskComponent";

const TaskContainer = ({ text, columnIndex, taskIndex, className, deleteTask }) => {
  return (
      <TaskComponent 
        className={className}
        text={text}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        onDeleteTask={deleteTask} 
      />
  );
};

const mapDispatchToProps = {
  deleteTask: tasksActions.deleteTask,
};

export default connect(null, mapDispatchToProps)(TaskContainer);
