
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "../components/ChildComponent1.js";
import ChildComponent2 from "../components/ChildComponent2.js";

const App = () => {
  function update(x) {
    setOption(x);
  }
  const [selectedOption, setOption] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 setOption={setOption} update={update} />
      <ChildComponent2 setOption={setOption} update={update} />
      <p>Selected Option:{selectedOption}</p>
    </div>
  );
};

export default App;
