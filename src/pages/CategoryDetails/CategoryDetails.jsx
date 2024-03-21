import React, { useEffect, useState } from "react";
import "./CategoryDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchFromAPI, Container, Card, Header } from "../../exports/exports";
function CategoryDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const location = useLocation();
  const category = location.state.category;

  const { name, id } = category;
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
        const categoryResult = await fetchFromAPI(`search/?query=${name}`);
        setCategoryData(categoryResult?.videos || []);
        setLoading(false);
      } catch (error) {
        setError("Network Error , Refresh the page");
        console.log("Errior in category Details ", error.message);
        setLoading(false);
      }
    })();
  }, [category.id]);
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <div className="categoruDetails">
        <h1 className="categoryDetailsTitle">
          <span>{name} </span>Videos
        </h1>

        <div className="categoryDetailsVodeos">
          <p className="categoryDetailsError"> {error && error}</p>
          {loading ? (
            <p className="categoryDetailsVideosLoadingTitle">
              Loading {name} videos....
            </p>
          ) : categoryData.length === 0 ? (
            <p className="categoryDetailsError">
              No videos found. Network Error
            </p>
          ) : (
            categoryData.map((categoryVideo) => (
              <div
                key={categoryVideo.video_id}
                className="categoryDetailsVideo"
                onClick={() =>
                  navigate(`/video-page/${categoryVideo.video_id}`)
                }
              >
                <Card
                  video={categoryVideo.video_id}
                  className="categoryDetailsCard"
                  img={categoryVideo.thumbnails[0].url}
                  title={categoryVideo.title}
                  channelName={categoryVideo.author}
                  views={categoryVideo.number_of_views}
                  publishDate={categoryVideo.published_time}
                  imgClass="categoryDetailsCardImg"
                  description={categoryVideo.description}
                  titleClass="categoryDetailsCardTitle"
                  channelClass="categoryDetailsCardChannel"
                  channelId={categoryVideo.channel_id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
}

export default CategoryDetails;
