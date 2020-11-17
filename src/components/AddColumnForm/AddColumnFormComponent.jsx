import React from "react";

const AddColumnFormComponent = ({onAddColumn}) => {
  return (
    <div>
      <button onClick={() => onAddColumn('Column')}>click</button>
    </div>
  );
};

export default AddColumnFormComponent;
