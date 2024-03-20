import React from "react";
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
  AddIcon
} from "../../exports/exports";
function Header() {
  const navigationItems = [
    { name: "manage videos", icon: "KeyboardArrowDownIcon", id: 1 },
    { name: "resources", icon: "KeyboardArrowDownIcon", id: 2 },
    { name: "features", icon: "KeyboardArrowDownIcon", id: 3 },
    { name: "watch", icon: "KeyboardArrowDownIcon", id: 4 },
    { name: "upgrade", id: 5 },
    { name: "manage videos", id: 6 }
  ];
  return (
    <Container>
      <div className="header">
        <div className="headerSearchAndLogoContainer">
          <Logo />
          <div className="headerInputContainer">
            <div className="headerInputSearchOption">
              <VideoLibraryOutlinedIcon className="headerIcon" />
              <KeyboardArrowDownIcon className="headerIcon" />
            </div>
            <Input
              className="headerInput"
              placeholder="Search videos, folders, and more..."
            />
            <SearchIcon className="headerSearchIcon headerIcon" />
          </div>
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
