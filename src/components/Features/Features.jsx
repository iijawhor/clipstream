import React from "react";
import "./Features.css";
import "./FeaturesResponsive.css";
import {
  CloudUploadIcon,
  DownloadIcon,
  VideoLibraryOutlinedIcon,
  CreateIcon,
  VideoStableIcon
} from "../../exports/exports";
function Features() {
  const featureItems = [
    {
      name: "Upload",
      icon: "CloudUploadIcon",
      id: 1,
      description: "from compouter"
    },
    {
      name: "Import",
      icon: "DownloadIcon",
      id: 2,
      description: "from drive and more"
    },
    {
      name: "Import",
      icon: "VideoStableIcon",
      id: 3,
      description: "screen or webcam"
    },
    {
      name: "Create",
      icon: "CreateIcon",
      id: 4,
      description: "new or from template"
    },
    {
      name: "Host",
      icon: "VideoStableIcon",
      id: 5,
      description: "virtual event or webinar"
    }
  ];
  return (
    <div className="features">
      {featureItems.map((featureItem) => (
        <div className="featureItem" key={featureItem.id}>
          <p>{/* <featureItem.icon /> */}</p>
          <div>
            <h1>{featureItem.name}</h1>
            <p>{featureItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
