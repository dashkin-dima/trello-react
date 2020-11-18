import React from "react";
import Columns from "./components/Columns";
import AddColumnForm from "./components/AddColumnForm";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Columns/>
      <AddColumnForm/>
    </div>
  );
};

export default App;
