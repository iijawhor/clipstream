import React, { useEffect, useState, Suspense } from "react";
import "./Home.css";
import {
  fetchFromAPI,
  Header,
  Features,
  Container,
  UploadOption,
  RecentVideos,
  Categories,
  MoreHorizIcon,
  Loading,
  CopyrightIcon,
  Error
} from "../../exports/exports";
import { useDispatch } from "react-redux";
import { setFeedData } from "../../store/homeDataSlice";
const MyFeed = React.lazy(() => import("../../components/MyFeed/MyFeed"));
function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effect called");
    (async () => {
      try {
        setError("");
        setLoading(true);
        const feedResponse = await fetchFromAPI("search/?query=video");
        console.log(feedResponse);
        dispatch(setFeedData(feedResponse?.videos));
        setResponse(feedResponse?.videos);
        setLoading(false);
      } catch (error) {
        if (response === "") {
          setError("Something went wrong! Unable to load the video ");
        }
        setError("Network Error! Refresh the page");
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);
  return (
    <Container className="homeContainer">
      <section className="home">
        <Features />
        <UploadOption />
        <RecentVideos />

        <div className="homeMyFeedContainer">
          <h1 className="homeFeedTitle">My Feed</h1>
          <Suspense fallback={<Loading />}>
            {error ? (
              <p className="homeFeedError">{error}</p>
            ) : (
              <MyFeed loading={loading} />
            )}
          </Suspense>
        </div>

        <Categories />
      </section>
      <section className="Footer">
        <div className="homFooterCopyRight">
          <CopyrightIcon className="homeFooterIcon" />
          <p>2024 Clipstream,Inc</p>
        </div>
        <div className="homeFooterRight">
          <MoreHorizIcon className="homeFooterMoreIcon" />
        </div>
      </section>
    </Container>
  );
}

export default Home;
