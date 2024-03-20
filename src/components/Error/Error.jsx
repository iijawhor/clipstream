import React from "react";
function Error(errorMessage) {
  return (
    <div>
      <h1
        style={{
          position: "relative",
          fontSize: "1.5rem",
          fontFamily: "sans-serif",
          letterSpacing: "1px"
        }}
      >
        {errorMessage}
      </h1>
    </div>
  );
}

export default Error;
