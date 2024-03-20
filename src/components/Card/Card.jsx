import React from "react";
import "./Card.css";
import "./CardResponse.css";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
function Card({
  title,
  channelName,
  views,
  publishDate,
  imgClass,
  description,
  titleClass,
  channelClass,
  className,
  channelId,
  video
}) {
  const navigate = useNavigate();
  const videoDescription = description?.slice(0, 80) + "...";
  const handleNavigate = () => {
    navigate(`channel-page/${channelId}`);
  };
  return (
    <div className={`card ${className}`}>
      <div className="cardHeader">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          controls={true}
          width="100%"
          height="250px"
        />
      </div>
      <div className="cardDetails">
        <p className={`cardTitle ${titleClass}`} onClick={() => navigate}>
          {title}
        </p>
        {description && <p className="cardDescription">{videoDescription}</p>}
        <div className="cardDetailsBottom">
          {views && <p>{views} views</p>}
          <p>{publishDate}</p>
        </div>
        <h1 className={`channelName ${channelClass}`}>{channelName}</h1>
      </div>
    </div>
  );
}

export default Card;
