import React, { useState, useEffect } from "react";
// useEffect parameter function will be executed, each time a component renders
function HookAfterRender() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookAfterRender;
