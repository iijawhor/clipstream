import React from "react";
import "./SearchResults.css";
import "./SearchResultsResponsive.css";
import { Card, Container } from "../../exports/exports";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
function SearchResults() {
  const searchResults = useSelector(
    (state) => state.searchData.searchData || []
  );
  const loading = useSelector((state) => state.searchData.loading);
  const location = useLocation();
  const searchQuery = location.state.searchQuery;
  console.log(loading);
  return (
    <Container>
      <div className="searchResults">
        <div className="searchResultsHeader">
          <h1>
            Search results for : <span>{searchQuery}</span>{" "}
          </h1>
        </div>
        <div className="searchResultItems">
          {loading ? (
            <p>Loading.........................</p>
          ) : searchResults.length > 0 ? (
            searchResults.map((searchResultDetails) => (
              <div className="searchResult" key={searchResultDetails.video_id}>
                <Card
                  channelName={searchResultDetails.author}
                  description={searchResultDetails.description}
                  views={searchResultDetails.number_of_views}
                  title={searchResultDetails.title}
                  channelId={searchResultDetails.channel_id}
                  video={searchResultDetails.video_id}
                  publishDate={searchResultDetails.published_time}
                  titleClass="searchResultCardTitle"
                  imgClass="searchResultCardImage"
                  channelClass="searchResultCardChannelName"
                />
              </div>
            ))
          ) : (
            <p>
              No results found. Network Error! Sometime the Youtube V2 Api
              doesn't responding correctly that's why the error is. try again
              and again it will respond.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}

export default SearchResults;
