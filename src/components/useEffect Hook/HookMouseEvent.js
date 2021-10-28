import React, { useEffect, useState } from "react";

function HookMouseEvent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("Inside use effect");
    window.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    });
  }, []);
  // Empty array at the end will call useEffect only during initial rendering not on re-renders

  return (
    <div>
      From function: X coordinate: {x} and Y coordinate: {y}
    </div>
  );
}

export default HookMouseEvent;
