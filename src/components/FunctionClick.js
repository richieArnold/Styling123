import React, { useState } from "react";

function FunctionClick() {
  const [count, setCount] = useState(0);
  let handleClick = () => {
    document.getElementById("i1").innerHTML = "Content changed";
  };
  return (
    <div>
      <h1 id="i1">This is H1</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionClick;
