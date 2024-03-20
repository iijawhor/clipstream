import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`${className}`}
      style={{
        position: "relative",
        boxSizing: "border-box"
      }}
    >
      {children}
    </div>
  );
}

export default Container;
