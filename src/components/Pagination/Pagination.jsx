import React from "react";
import "./Pagination.css";
import {
  ArrowBackIosNewIcon,
  ArrowForwardIosIcon
} from "../../exports/exports";
function Pagination({ navigate, dataLength }) {
  return (
    <div className={`pagination ${dataLength <= 0 ? "disabled" : ""}`}>
      <button className="paginationViewAllButton" onClick={navigate}>
        view all
      </button>
      {/* <div className="paginationButtons">
        <ArrowBackIosNewIcon className="paginationIcon" />
        <ArrowForwardIosIcon className="paginationIcon" />
      </div> */}
    </div>
  );
}

export default Pagination;
