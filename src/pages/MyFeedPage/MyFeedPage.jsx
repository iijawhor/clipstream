import React, { useEffect, useState } from "react";
import "./MyFeedPage.css";
import "./MyFeedPageResponsive.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  Container,
  Header,
  ArrowUpwardIcon,
  CloudUploadIcon
} from "../../exports/exports";
function MyFeedPage() {
  const myFeedPageData = useSelector((state) => state.feedData.feedData);
  const whatsNewInClipStream = [
    {
      title: "Introducing Vimeo Central",
      postedBy: "Posted in Product News",
      description:
        "A secure, AI-powered video hub designed to build a more connected and productive team."
    },
    {
      title: "Vimeo vs. Brightcove: Which video platform should you choose?",
      postedBy: "Video Hosting",
      description:
        "Compare Brightcove and Vimeo based on features, integrations, more. Find out which software is best for personal use and for business."
    },
    {
      title: "Vimeo vs. Kaltura: Which video hosting site should you choose?",
      postedBy: "Video Hosting",
      description:
        "See how Vimeo compares to Kaltura as an agile and customizable video platform with plenty of integrations to choose from."
    },
    {
      title: "Vimeo vs. Wistia: Which video hosting site should you choose?",
      postedBy: "Video Hosting",
      description:
        "Vimeo offers a versatile video hosting platform for marketing teams and business comms. See how Wistia compares on all fronts."
    }
  ];
  const naviagte = useNavigate();
  const location = useLocation();
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrolling, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", () => {});
  }, []);

  const handlScrollToTop = () => {
    setLastScrollPosition(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Container>
      <Header />
      <div className="myFeedPge">
        <div className="myFeedPageHeader">
          <h1 className="myFeedPageTitle">My feed </h1>
        </div>
        <div className="myFeedPageContainer">
          <div className="myFeedPageItems">
            {myFeedPageData.map((feedData) => (
              <div
                onClick={() => {
                  naviagte(`/video-page/${feedData.video_id}`);
                }}
                className="myFeedPageCard"
                key={feedData.video_id}
              >
                <Card
                  className={feedData.channelId}
                  imgClass="feedPageCardImage"
                  titleClass="myFeedPageTitle"
                  channelClass="myFeedPageChannel"
                  title={feedData.title}
                  views={feedData.number_of_views}
                  channelName={`from ${feedData.author}`}
                  publishDate={feedData.published_time}
                  img={feedData.thumbnails[0].url}
                  description={feedData.description}
                />
              </div>
            ))}
          </div>
          <div className="myFeedPageRelatedVideos">
            <div
              className={`gotToTop ${scrolling ? "activeButton" : ""}`}
              id="goToTop"
              onClick={handlScrollToTop}
            >
              <ArrowUpwardIcon className="goToTopIcon" />
            </div>
            <div className="myFeedPageRelatedVideosUploadSection">
              <button className="myFeedPageRelatedVideosUploadButton">
                <CloudUploadIcon />
                Upload a video
              </button>
            </div>
            <section className="myFeedPageWhatsNewSection">
              <h1>What's New</h1>
              <ul className="myFeedPageWhatsNewLists">
                {whatsNewInClipStream.map((whatsNew) => (
                  <li>
                    <h2>{whatsNew.title}</h2>
                    <p className="myFeedPageWhatsNewPostedBy">
                      postedBy :{whatsNew.postedBy}
                    </p>
                    <p className="myFeedPageWhatsNewDescription">
                      {whatsNew.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          {/*  <div className="myFeedPageRelatedVideos"> */}
        </div>
      </div>
    </Container>
  );
}

export default MyFeedPage;
