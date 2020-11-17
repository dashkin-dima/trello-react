import React from "react";
import AddColumnFormComponent from "./AddColumnFormComponent";
import { columnsActions } from '../../actions';
import { connect } from "react-redux";
const AddColumnFormContainer = ({addColumn}) => {
  return (
    <div>
      <AddColumnFormComponent onAddColumn={addColumn} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addColumn: (title) => dispatch(columnsActions.addColumn(title)),
});


export default connect(null, mapDispatchToProps)(AddColumnFormContainer);
