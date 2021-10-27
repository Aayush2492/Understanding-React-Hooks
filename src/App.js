import React from "react";
import "./App.css";

import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookWithObject from "./components/HookWithObject";
import HookWithArray from "./components/HookWithArray";

const App = () => {
  return (
    <div className="App">
      <h1>HELLo world </h1>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookWithObject /> */}
      <HookWithArray />
    </div>
  );
};

export default App;
