import React, { useState } from "react";
import HookMouseEvent from "./HookMouseEvent";

function HookCleanUp() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <HookMouseEvent />}
    </div>
  );
}

export default HookCleanUp;
