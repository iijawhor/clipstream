import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  MyFeedPage,
  VideoPage,
  CategoryPage,
  CategoryDetails,
  ChannelPage
} from "./exports/exports";
import { Provider } from "react-redux";
import { appStore } from "./store/appstore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "", element: <Home /> }]
  },
  {
    path: "/my-feed",
    element: <MyFeedPage />
  },
  {
    path: "/video-page/:id",
    element: <VideoPage />
  },
  {
    path: "/category-page",
    element: <CategoryPage />
  },
  {
    path: "/channel-page/:id",
    element: <ChannelPage />
  },
  {
    path: "/category-details/:id",
    element: <CategoryDetails />
  }
]);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
