import React, { useEffect, useState } from "react";

function ConditionEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // We only want title to be updated when count changes but use effect will be called even after name changes
  useEffect(() => {
    console.log("Inside the useEffect hook");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times{" "}
      </button>
    </div>
  );
}

export default ConditionEffectHook;
