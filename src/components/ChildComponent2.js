import React from "react";

export default function ChildComponent2({ selectedOption, handleSelect }) {
  return (
    <div>
      <button onClick={() => handleSelect("Option 2")}>
        Select Option 2
      </button>
      {/* optional display to prove state is passed */}
      {/* <p>Current: {selectedOption}</p> */}
    </div>
  );
}