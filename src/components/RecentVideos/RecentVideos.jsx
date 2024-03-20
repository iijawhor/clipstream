import React from "react";
import "./RecentVideos.css";
import "./RecentVideosResponsive.css";
import { Container } from "../../exports/exports";
function RecentVideos() {
  return (
    <Container>
      <h1 className="recentVideosTitle">Recent Videos</h1>
      <div className="recentVideos">
        <p>Your recently modified videos will live here.</p>
        <button>Upload a video</button>
      </div>
    </Container>
  );
}

export default RecentVideos;
