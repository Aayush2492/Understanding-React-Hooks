import React from "react";
import "./App.css";

import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

const App = () => {
  return (
    <div className="App">
      <h1>HELLo world </h1>
      <ClassCounter />
      <HookCounter />
    </div>
  );
};

export default App;
