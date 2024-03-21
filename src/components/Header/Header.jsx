import React, { useState } from "react";
import "./Header.css";
import "./HeaderResponsive.css";
import {
  Container,
  Input,
  KeyboardArrowDownIcon,
  Logo,
  PermIdentityOutlinedIcon,
  SearchIcon,
  VideoLibraryOutlinedIcon,
  NotificationsOutlinedIcon,
  AddIcon,
  fetchFromAPI
} from "../../exports/exports";
import { setSearchData, setLoading } from "../../store/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigationItems = [
    { name: "manage videos", icon: "KeyboardArrowDownIcon", id: 1 },
    { name: "resources", icon: "KeyboardArrowDownIcon", id: 2 },
    { name: "features", icon: "KeyboardArrowDownIcon", id: 3 },
    { name: "watch", icon: "KeyboardArrowDownIcon", id: 4 },
    { name: "upgrade", id: 5 },
    { name: "manage videos", id: 6 }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      try {
        setError("");
        dispatch(setLoading(true));
        const searchResponse = await fetchFromAPI(
          `search/?query=${searchQuery}`
        );
        setSearchResults(searchResponse?.videos);
        dispatch(setSearchData(searchResponse?.videos));
        dispatch(setLoading(false));
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.log("Error in search component ::", error);
      } finally {
        dispatch(setLoading(false));
        navigate("/search-results", {
          state: { searchQuery: searchQuery }
        });
      }
    }
  };

  return (
    <Container>
      <div className="header">
        <div className="headerSearchAndLogoContainer">
          <Logo />
          <form action="" onSubmit={handleSearch} className="headerSearchForm">
            <div className="headerInputContainer">
              <div className="headerInputSearchOption">
                <VideoLibraryOutlinedIcon className="headerIcon" />
                <KeyboardArrowDownIcon className="headerIcon" />
              </div>
              <Input
                className="headerInput"
                placeholder="Search videos, folders, and more..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button type="submit">
              <SearchIcon className="headerSearchIcon headerIcon" />
            </button>
          </form>
        </div>
        <div className="headerRightContainer">
          <div className="headerUpgradeOption">Upgrade</div>
          <div className="headerUploadNewVideoOption">
            <p>New video</p>
            <KeyboardArrowDownIcon className="headerIcon" />
            <AddIcon className="headerAddIcon" />
          </div>
          <NotificationsOutlinedIcon className="headerRightIcon" />
          <PermIdentityOutlinedIcon className="headerRightIcon" />
        </div>
      </div>
    </Container>
  );
}

export default Header;
