import React, { useState } from "react";

function HookWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
        />
        <br />
        <input
          type="text"
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
        />
        <h2>First name: {name.firstName}</h2>
        <h2>Last name: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookWithObject;
