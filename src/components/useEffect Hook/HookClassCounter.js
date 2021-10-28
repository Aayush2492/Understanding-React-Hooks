import React, { useEffect, useState } from "react";

function HookClassCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Inside tick");
    // setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <div>From Hook: {count}</div>;
}

export default HookClassCounter;

// It seems when no dependency is used in useEffect and a variable is passed in setCount, then counter works
// When empty dependency is used in useEffect(run only intially) and a variable is passed in setCount, then counter DOES NOT work
// When empty dependency is used in useEffect(run only intially) and a FUNCTION is passed in setCount, then counter works
//
// WEIRD. Is the problem with not passing any dependency or with tick or with setCount ????
