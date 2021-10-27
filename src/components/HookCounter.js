import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  function incrementCountByFive() {
    for (let index = 1; index <= 5; index++) {
      // setCount(count + 1); <-------------- Doesn't work
      setCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div>
      <button onClick={() => setCount({ count: count + 1 })}>
        Count: {count}
      </button>
      <button onClick={incrementCountByFive}>increment By Five</button>
    </div>
  );
}

export default HookCounter;
