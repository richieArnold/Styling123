import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
  ":hover": {
    backgroundColor: "green",
  },
};
function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline styles</h1>
    </div>
  );
}

export default Inline;
