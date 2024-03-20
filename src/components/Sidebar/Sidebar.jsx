import React, { useState } from "react";
import "./Sidebar.css";
import "./SidebarResponsive.css";
import {
  HomeOutlinedIcon,
  VideoLibraryIcon,
  VideocamOutlinedIcon,
  // VideoStableIcon,
  SpaceDashboardOutlinedIcon,
  InsertChartOutlinedRoundedIcon
} from "../../exports/exports";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const sidebarItems = [
    { name: "Home", icon: "HomeOutlinedIcon", id: 1 },
    { name: "Library", icon: "VideoLibraryIcon", id: 2 },
    { name: "Live events", icon: "VideocamOutlinedIcon", id: 3 }
  ];
  const sidebarFeartures = [
    { name: "Showcase", icon: "SpaceDashboardOutlinedIcon", id: 4 },
    { name: "Analytics", icon: "InsertChartOutlinedRoundedIcon", id: 5 },
    { name: "Monetize", icon: "VideoStableIcon", id: 6 }
  ];
  const [sidebarItemActive, setSidebarItemActive] = useState(false);
  const handleNavigation = (id) => {
    setSidebarItemActive(sidebarItemActive === id ? null : id);
  };
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h4>Start your team</h4>
      </div>
      <div className="sidebarItems">
        {sidebarItems.map((sidebarItem) => (
          <div
            key={sidebarItem.id}
            className={`sidebarItemContainer ${
              sidebarItemActive === sidebarItem.id ? "sidebarItemIsActive" : ""
            }`}
            onClick={() => handleNavigation(sidebarItem.id)}
          >
            <button className="sidebarItemButton">{sidebarItem.name}</button>
          </div>
        ))}
      </div>
      <div className="sidebarFeatures">
        {sidebarFeartures.map((sidebarFeature) => (
          <div
            key={sidebarFeature.id}
            className={`sidebarItemContainer ${
              sidebarItemActive === sidebarFeature.id
                ? "sidebarItemIsActive"
                : ""
            }`}
            onClick={() => setSidebarItemActive(sidebarFeature.id)}
          >
            <button className="sidebarItemButton">{sidebarFeature.name}</button>
            {/* <sidebarFeature.icon /> */}
          </div>
        ))}
      </div>
      <div className="sidebarBottom">
        <button>Upgrade</button> <p>for more videos</p>
      </div>
    </div>
  );
}

export default Sidebar;
