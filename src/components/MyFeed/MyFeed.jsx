import React, { useEffect, useState } from "react";
import "./MyFeed.css";
import "./MyFeedResponsive.css";
import { Card, Container, Pagination } from "../../exports/exports";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function MyFeed({ loading }) {
  const navigate = useNavigate();
  const feedVideos = useSelector((state) => state.feedData.feedData || []);
  const handleNavigate = () => {
    navigate("/my-feed");
  };

  const dataLength = feedVideos.length;

  const [disablePagination, setDisablePagination] = useState(false);

  return (
    <Container className="myFeedContainer">
      <div className="myFeedHeader">
        <div className="myFeedHeaderFeedScrollingOptions">
          <Pagination navigate={handleNavigate} dataLength={dataLength} />
        </div>
      </div>
      <div className="myFeed">
        {loading ? (
          <p>Loading...........</p>
        ) : (
          <>
            {feedVideos.map((item, index) => (
              <div
                className="myFeedCardContainer"
                key={index}
                onClick={() => navigate(`/video-page/${item.video_id}`)}
              >
                <Card
                  channelId={item.channel_id}
                  title={item.author}
                  views={item.number_of_views}
                  channelName={item.title}
                  publishDate={item.published_time}
                  img={item.thumbnails[0].url}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </Container>
  );
}

export default MyFeed;
