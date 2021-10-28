import React from "react";
import "./App.css";
import ClassCounter from "./components/useEffect Hook/ClassCounter";
import HookClassCounter from "./components/useEffect Hook/HookClassCounter";

const App = () => {
  return (
    <div className="App">
      <h1>HELLo world </h1>

      <ClassCounter />
      <HookClassCounter />
      <h1>Ok buddy</h1>
    </div>
  );
};

export default App;
