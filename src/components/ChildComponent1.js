import React from "react";

export default function ChildComponent1({ selectedOption, handleSelect }) {
  return (
    <div>
      <button onClick={() => handleSelect("Option 1")}>
        Select Option 1
      </button>
      {/* optional display to prove state is passed */}
      {/* <p>Current: {selectedOption}</p> */}
    </div>
  );
}