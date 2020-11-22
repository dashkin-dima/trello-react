import React from "react";
import AddColumnFormComponent from "./AddColumnFormComponent";
import { columnsActions } from "../../actions";
import { connect } from "react-redux";
const AddColumnFormContainer = ({ addColumn }) => {
  return <AddColumnFormComponent onAddColumn={addColumn} />;
};

const mapDispatchToProps = {
  addColumn: columnsActions.add,
};

export default connect(null, mapDispatchToProps)(AddColumnFormContainer);
