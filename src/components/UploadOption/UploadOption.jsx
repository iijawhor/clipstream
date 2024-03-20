import React, { useEffect, useState } from "react";
import "./UploadOption.css";
import "./UploadOptionResponsive.css";
import { Input } from "../../exports/exports";
function UploadOption() {
  const getFile = () => {
    const item = localStorage.getItem("data");

    if (item) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  };
  const [fileInput, setFileInput] = useState("");
  const [data, setData] = useState(getFile());

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(fileInput));
  };

  return (
    <div className="uploadOption">
      <div className="uploadOptionDetails">
        <h1>Upload an existing video</h1>
        <p>
          Choose a video from your device to enhance, customize, and share like
          a pro.
        </p>
        <form action="" onSubmit={handleSubmit}>
          <Input
            className="uploadOptionUploadButton"
            placeholder="Enter url"
            onChange={(e) => setFileInput(e.target.value)}
            value={fileInput}
          />
        </form>
        {/* <button className="uploadOptionUploadButton">Upload</button> */}
      </div>
      <div className="uploadOptionVideoContainer">
        <video src={data} controls autoPlay></video>
      </div>
    </div>
  );
}

export default UploadOption;
