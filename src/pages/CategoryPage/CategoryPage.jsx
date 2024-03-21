import React, { useEffect, useState } from "react";
import "./CategoryPage.css";
import "./CategoryPageResponsive.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Container, Header, fetchFromAPI } from "../../exports/exports";
import ReactPlayer from "react-player";
function CategoryPage({ video }) {
  const location = useLocation();
  const categories = location.state.categories;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCategory, setActiveCategory] = useState(false);
  const [categorySearchedData, setCategorySearchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleCategorySearch = async () => {
    try {
      setLoading(true);
      setError("");
      const categorySearchData = await fetchFromAPI(
        `search/?query=${selectedCategory}`
      );
      setCategorySearchedData(categorySearchData?.videos || []);
      console.log("categorySearchData", categorySearchData);
      setLoading(false);
    } catch (error) {
      setError("Something went wrong!  Refresh the page");
      setLoading(false);
      console.log("eeror In Category Page::", error.message);
    }
  };

  useEffect(() => {
    handleCategorySearch();
  }, [selectedCategory]);

  const handleCategory = (name, id) => {
    setActiveCategory(activeCategory === id ? null : id);
    setSelectedCategory(name);
    if (selectedCategory) {
      handleCategorySearch();
    }
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <div className="categoryPageVideo">
        <img
          className="categoryPageHeroImage"
          src={categories[1].img}
          alt="img"
        />
      </div>
      <div className="categoryPage">
        <div className="categoryPageCategories">
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategory(category.name, category.id)}
                className={`categoryPageCategory ${
                  activeCategory === category.id ? "activeCategory" : ""
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryPageCategoryVideos">
          <h1 className="categoryPageCategoryVideosHeaderCategoryTitle">
            <span> {selectedCategory}</span> videos
          </h1>
          <div className="categoryPageCategoryVideoContainer">
            <p className="errorMessageInCategoryPage">{error && error}</p>

            {loading ? (
              <p>Laoding...........</p>
            ) : categorySearchedData.length === 0 ? (
              <p>No videos Found : Network Error</p>
            ) : (
              <>
                {categorySearchedData?.map((categorySearchData) => (
                  <div
                    key={categorySearchData.video_id}
                    className="categoryPageCategoryVideoContainerCard"
                    onClick={() =>
                      navigate(`/video-page/${categorySearchData.video_id}`)
                    }
                  >
                    <Card
                      video={categorySearchData.video_id}
                      channelId={categorySearchData.channel_id}
                      img={categorySearchData.thumbnails[0].url}
                      channelName={categorySearchData.author}
                      channelClass="categoryPageCategoryVideoContainerCardChannelName"
                      titleClass="categoryPageCategoryVideoContainerCardTitle"
                      title={categorySearchData.title}
                      views={categorySearchData.number_of_views}
                      imgClass="categoryPageCategoryVideoContainerCardImage"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CategoryPage;
