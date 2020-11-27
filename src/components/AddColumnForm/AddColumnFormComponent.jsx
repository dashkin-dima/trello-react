import React, { useState } from "react";

const AddColumnFormComponent = ({ onAddColumn }) => {
  const [showForm, setShowForm] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const addColumn = () => {
    onAddColumn(valueInput);
    setValueInput("");
    setShowForm(false);
  };
  return showForm ? (
    <div className="add-column-form">
      <textarea
        className="add-column-form__input"
        type="text"
        onChange={(e) => setValueInput(e.target.value)}
      />
      <div className="add-column-form__button-add" onClick={addColumn}>
        add
      </div>
      <div
        className="add-column-form__button-cancel"
        onClick={() => setShowForm(false)}
      >
        cancel
      </div>
    </div>
  ) : (
    <div className="add-column-form__button-show" onClick={() => setShowForm(true)}>
      ADD
    </div>
  );
};

export default AddColumnFormComponent;
