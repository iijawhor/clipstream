import React, { Suspense } from "react";
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
  ChannelPage,
  Loading
} from "./exports/exports";
import { Provider } from "react-redux";
import { appStore } from "./store/appstore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const SearchResults = React.lazy(() =>
  import("./components/SearchResults/SearchResults")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/search-results", element: <SearchResults /> }
    ]
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
  },
  {
    path: "/search-result",
    element: (
      <Suspense fallback={<Loading />}>
        <SearchResults />
      </Suspense>
    )
  }
]);

root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
