import React, { useState } from "react";

import "./AddColumnForm.scss";

const AddColumnFormComponent = ({ onAddColumn }) => {
  const [showForm, setShowForm] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const addColumn = () => {
    if (valueInput) {
      onAddColumn(valueInput);
      setValueInput("");
      setShowForm(false);
    } else {
      alert("enter column");
    }
  };
  return showForm ? (
    <div className="column">
      <textarea
        className="column__input"
        type="text"
        onChange={(e) => setValueInput(e.target.value)}
      />
      <div className="column__buttons-form">
        <div className="column__button-add" onClick={addColumn}>
          add column
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
    <div className="column" onClick={() => setShowForm(true)}>
      <div className="column__button-show-form">add column</div>
    </div>
  );
};

export default AddColumnFormComponent;
