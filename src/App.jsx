import React from "react";

import Columns from "./components/Columns";
import Header from "./components/Header";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="columns">
        <Columns />
      </div>
    </div>
  );
};

export default App;
