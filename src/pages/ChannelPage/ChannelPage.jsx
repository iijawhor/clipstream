import React, { useEffect, useState } from "react";
import "./ChannelPage.css";
import "./ChannelPageResponsive.css";
import {
  Card,
  Container,
  Header,
  HomeOutlinedIcon,
  SlowMotionVideoIcon,
  fetchFromAPI
} from "../../exports/exports";
import { Link, useParams } from "react-router-dom";
function ChannelPage() {
  const { id } = useParams();
  const channelHeaderItems = [
    { name: "home", id: 1 },
    { name: "Videos", id: 2 },
    { name: "Playlists", id: 3 },
    { name: "community", id: 4 }
  ];

  const [activeChannelNavigation, setActiveChannelNavigation] = useState(false);
  const handleActive = (id) => {
    setActiveChannelNavigation(activeChannelNavigation === id ? null : id);
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [channelDetails, setChannelDetails] = useState({});
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoading(true);
        const channelDetails = await fetchFromAPI(
          `channel/details?channel_id=${id}`
        );
        setChannelDetails(channelDetails);
        console.log("Channek Details:::", channelDetails);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Header />
      <div className="channelPage">
        <div className="channelPageSidebar">
          <p className="channelPageSidebarItem">
            <HomeOutlinedIcon className="channelPageSidebarIcon" />
            Home
          </p>
          <p className="channelPageSidebarItem">
            <SlowMotionVideoIcon className="channelPageSidebarIcon" />
            Shorts
          </p>
        </div>
        <div className="channelPageDetailContainer">
          <div className="channelPageDetailsHeader">
            <img src={channelDetails?.banner?.[0]?.url} alt="channelImage" />
          </div>
          <div className="channelPageDetails">
            <div className="channelPageDetailsAvatar">
              <img src={channelDetails?.avatar?.[0]?.url} alt="channelImage" />
            </div>
            <div className="channelPageDetail">
              <h1 className="channelPageDetailChannelName">
                {channelDetails?.title}
              </h1>
              <div className="channelPageDetailChannelSubscriberDetails">
                <p> {channelDetails?.subscriber_count}</p>
                {/* <p>channel video count</p> */}
              </div>
              <p className="channelDescription">
                {/* {channelDetails?.description} */}
              </p>
              {/* 
              {channelDetails?.link && (
                <div className="channleAuthorLinks">
                  {channelDetails.links.map((link) => (
                    <Link>{link?.endpoint}</Link>
                  ))}
                </div>
              )} */}
              <div>
                <button className="channelSubscribeButton">Subscribe</button>
              </div>
            </div>
          </div>
          <section className="channelPageVideoSection">
            <div className="channelPageVideoSectionHeader">
              <ul>
                {channelHeaderItems.map((item) => (
                  <li
                    onClick={() => handleActive(item.id)}
                    className={`${
                      activeChannelNavigation === item.id
                        ? "activeChannelNavigation"
                        : ""
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="channelPageChannelVideos">
              <div className="channelPageChannelVideo">
                <Card />
              </div>
              <div className="channelPageChannelVideo">
                <Card />
              </div>
              <div className="channelPageChannelVideo">
                <Card />
              </div>
              <div className="channelPageChannelVideo">
                <Card />
              </div>
              <div className="channelPageChannelVideo">
                <Card />
              </div>
              <div className="channelPageChannelVideo">
                <Card />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}

export default ChannelPage;
