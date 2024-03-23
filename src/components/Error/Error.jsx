import React from "react";
function Error({ errorMessage }) {
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        width: "100%"
      }}
    >
      <h1
        style={{
          fontSize: "0.8rem",
          fontWeight: "400",
          lineHeight: "1.3rem",
          fontFamily: "sans-serif",
          letterSpacing: "1px",
          color: "red"
        }}
      >
        {errorMessage}
      </h1>
    </div>
  );
}

export default Error;
