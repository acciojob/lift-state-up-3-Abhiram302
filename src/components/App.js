import React, { useState } from "react";
import ChildComponent1 from "../components/ChildComponent1.js";
import ChildComponent2 from "../components/ChildComponent2.js";

export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Lift State Up Example</h1>
      <p>Selected Option: {selectedOption}</p>

      {/* Pass both state and updater function */}
      <ChildComponent1
        selectedOption={selectedOption}
        handleSelect={handleSelect}
      />
      <ChildComponent2
        selectedOption={selectedOption}
        handleSelect={handleSelect}
      />
    </div>
  );
}
