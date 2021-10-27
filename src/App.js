import React from "react";
import "./App.css";

import ClassCounter from "./components/useState hook/ClassCounter";
import HookCounter from "./components/useState hook/HookCounter";
import HookWithObject from "./components/useState hook/HookWithObject";
import HookWithArray from "./components/useState hook/HookWithArray";
import ClassComponentEffect from "./components/useEffect Hook/ClassCounterEffect";
import HookAfterRender from "./components/useEffect Hook/HookAfterRender";

const App = () => {
  return (
    <div className="App">
      <h1>HELLo world </h1>
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookWithObject /> */}
      {/* <HookWithArray /> */}
      <ClassComponentEffect />
      <HookAfterRender />
    </div>
  );
};

export default App;
