import React from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate("/")}>
      Clipstream
    </div>
  );
}

export default Logo;
