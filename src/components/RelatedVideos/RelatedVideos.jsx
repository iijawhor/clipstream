import React, { useEffect, useState } from "react";
import "./RelatedVideos.css";
import fetchFromAPI from "../../fetchFromAPI/fetchFromAPI";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function RelatedVideos() {
  const relatedVideos = useSelector(
    (state) => state.relatedVideo.relatedVideo || []
  );
  const navigate = useNavigate();
  return (
    <div className="relatedVideoContainer">
      {relatedVideos.map((relatedVideo) => (
        <div
          className="relatedVideo"
          key={relatedVideo.video_id}
          onClick={() => navigate(`/video-page/${relatedVideo.video_id}`)}
        >
          <div className="relatedVideoTag">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${relatedVideo.video_id}`}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="relatedVideoDetails">
            <h3 className="relatedVideoDetailTitle">{relatedVideo.title}</h3>
            <h1 className="relatedVideoDetailChannelName">
              {relatedVideo.author.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;
