import React from "react";
import "./Styles.css";
function Stylesheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheets;
