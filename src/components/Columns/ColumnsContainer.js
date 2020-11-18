import React, { Fragment } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import ColumnComponent from "./ColumnComponent";
import { tasksActions } from "../../actions";

const ColumnsContainer = ({ columns, addTask }) => {
  return (
    <Fragment>
      {columns.map((column, index) => (
        <ColumnComponent
          key={uuid()}
          {...column}
          columnIndex={index}
          onAddTask={addTask}
        />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns,
});

const mapDispatchToProps = {
  addTask: tasksActions.addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);
