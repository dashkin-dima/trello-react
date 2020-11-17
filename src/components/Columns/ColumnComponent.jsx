import React from "react";
import Task from '../Task';

const ColumnComponent = ({title, tasks}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{tasks.map(task => <Task text={task}/>)}</div>
    </div>
  );
};

export default ColumnComponent;
