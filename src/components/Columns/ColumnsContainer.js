import React, { Fragment } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from 'uuid';

import ColumnComponent from "./ColumnComponent";

const ColumnsContainer = ({ columns }) => {
  return (
    <Fragment>
      {columns.map((column) => (
        <ColumnComponent 
          key={uuid()}
          {...column}
        />
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  columns: state.columns,
});


export default connect(mapStateToProps)(ColumnsContainer);
