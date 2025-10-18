import React, { useState } from "react";
// import './../styles/App.css';
import Child1 from "../components/Child1.js";
import Child2 from "../components/Child2.js";

const App = () => {
  function update(x) {
    setOption(x);
  }
  const [selectedOption, setOption] = useState("");
  return (
    <div style={{ backgroundColor: "green", height: "50vh", padding: "15px" }}>
      <h1>Parent Component</h1>
      <Child1 setOption={setOption} update={update} />
      <Child2 setOption={setOption} update={update} />
      <p>Selected Option:{selectedOption}</p>
    </div>
  );
};

export default App;
