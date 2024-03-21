import React, { useEffect, useState } from "react";
import "./VideoPage.css";
import "./VideoPageRespnsive.css";
import ReactPlayer from "react-player";
import {
  ChatIcon,
  Container,
  Header,
  ShareIcon,
  ThumbUpIcon,
  fetchFromAPI,
  RemoveRedEyeIcon,
  RelatedVideos
} from "../../exports/exports";
import { setVideoData, setVideoComments } from "../../store/videoDataSlice";
import { setRelatedVideo } from "../../store/relatedVideoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function VideoPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [video, setVideo] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoDetail = useSelector((state) => state.videoData.videoData);
  console.log("Video Details", videoDetail);
  const videoComments = useSelector((state) => state.videoData.videoComments);
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoading(true);
        const videoDetails = await fetchFromAPI(`video/details?video_id=${id}`);
        dispatch(setVideoData(videoDetails));
        console.log("video details iN vidoPage:::::::::::", videoDetails);
        const responseComments = await fetchFromAPI(
          `video/comments?video_id=${id}`
        );
        dispatch(setVideoComments(responseComments.comments));

        const relatedVideos = await fetchFromAPI(
          `video/recommendations?video_id=${id}`
        );

        dispatch(setRelatedVideo(relatedVideos?.videos));
        console.log("video page related video", relatedVideos.videos);

        const videoData = await fetchFromAPI(`video/data?video_id=${id}`);

        setVideo(videoData);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    })();
  }, [id]);
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <div className="videoPageHeader">
        <h1></h1>
        <div className="videoPage">
          <div className="videoPageVideoContainer">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
              width="100%"
              height="450px"
            />
          </div>
          <div className="videoPageVideoDetailsContainer">
            <div className="videoPageVideoDetails">
              <div className="videoPageVideoDetailsHead">
                <div className="videoPageVideoDetailHeadVideoDetail">
                  <h1 className="videoPageDetailVideoTitle">
                    {videoDetail?.title}
                  </h1>
                  <p className="videoPageDetailVideoPublishingDate">
                    {videoDetail?.published_time}
                  </p>
                  <div
                    className="videoPageDetailVideoChannel"
                    onClick={() =>
                      navigate(`/channel-page/${videoDetail.channel_id}`)
                    }
                  >
                    <img
                      src={videoDetail?.thumbnails?.[0]?.url}
                      alt="logo"
                      className="videoPageDetailVideoChannelLogo"
                    />
                    <h2 className="videoPageDetailVideoChannelName">
                      {videoDetail?.author}
                    </h2>
                  </div>
                </div>
                <div className="videoPageVideoDetailsHeadActions">
                  <p>
                    <RemoveRedEyeIcon className="videoPageVideoDetailsHeadActionsIcon" />
                    <span>{videoDetail?.number_of_views}</span>
                  </p>
                  <p>
                    <ThumbUpIcon className="videoPageVideoDetailsHeadActionsIcon" />
                    <span>{videoComments?.total_number_of_likes}</span>
                  </p>
                  <p>
                    <ChatIcon className="videoPageVideoDetailsHeadActionsIcon" />
                    <span>{videoComments?.number_of_comments}</span>
                  </p>
                  <p>
                    <ShareIcon className="videoPageVideoDetailsHeadActionsIcon" />
                  </p>
                </div>
              </div>
              {/*         <div className="videoPageVideoDetailsHead"> */}
              <div className="videoPageVideoDetailsDescription">
                <p className="videoPageVideoDetailsDescriptionText">
                  {videoDetail?.description}
                </p>
              </div>
              <div className="videoPageDetailsCommentSection">
                <div className="videoPageDetailsCommentSectionHeader">
                  <h3 className="videoPageDetailsCommentSectionHeaderTitle">
                    {videoComments?.total_number_of_comments} Comments
                  </h3>
                </div>
                <div className="videoPageDetailsComments">
                  {videoComments.map((comment) => (
                    <div
                      className="videoPageDetailsComment"
                      key={comment.video_id}
                    >
                      <div className="videoPageDetailsCommentHeader">
                        <img
                          src={comment.thumbnails[0].url}
                          alt="logo"
                          className="videoPageDetailsCommentUserLogo"
                        />
                        <h4 className="videoPageDetailsCommentUserName">
                          {comment.author_name}
                        </h4>
                        <p className="videoPageDetailsCommentDate">
                          {comment.published_time}
                        </p>
                      </div>
                      <div className="commentInteractions">
                        <p>{comment.number_of_like}</p>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*   <div className="videoPageDetailsCommentSection"> */}
            </div>
            {/*  <div className="videoPageVideoDetails"> */}
            <div className="videoPageVideoRelatedVideos">
              <div className="videoPageVideoRelatedVideosHeader">
                <h1 className="videoPageVideoRelatedVideosHeaderTitle">
                  Recommendations
                </h1>
                <div className="videoPageVideoRelatedVideosHeaderautoPlayButton">
                  <p>Auto play next video</p>
                </div>
              </div>
              <div className="videoPageVideoRelatedVideosContainer">
                <RelatedVideos />
              </div>
            </div>
            {/*   <div className="videoPageVideoRelatedVideos"> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default VideoPage;
