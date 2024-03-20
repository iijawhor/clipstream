import React from "react";
import "./Categories.css";
import "./CategoriesResponsive.css";
import { Card, Container, Pagination } from "../../exports/exports";
import { useNavigate } from "react-router-dom";
function Categories() {
  const categories = [
    {
      name: "Animation",
      id: 1,
      img: "https://wallpapers.com/images/hd/hotel-transylvania-characters-4k-cartoon-2qixue39f1yvh40q.jpg"
    },
    {
      name: "Comedy",
      id: 2,
      img: "https://getwallpapers.com/wallpaper/full/4/7/f/733426-widescreen-comedy-wallpaper-1920x1200.jpg"
    },
    {
      name: "Documentry",
      id: 3,
      img: "https://i.ytimg.com/vi/Q9_iYx_XEbc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdZRBYkwuzCadpUpuasBobLHRBJQ"
    },
    {
      name: "Experimental",
      id: 4,
      img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
    },
    {
      name: "Music",
      id: 5,
      img: "https://wallpapercave.com/wp/wp2070744.jpg"
    },
    {
      name: "Narrative",
      id: 6,
      img: "https://i.ytimg.com/vi/ccAOGjmTl4I/maxresdefault.jpg"
    },
    {
      name: "Sports",
      id: 7,
      img: "https://i.pinimg.com/originals/63/af/33/63af33390b2fa6130bd9f152392801b1.jpg"
    },
    {
      name: "Travel",
      id: 8,
      img: "https://wallpapercave.com/wp/wp11648188.jpg"
    }
  ];
  const navigate = useNavigate();
  const paginate = () => {
    navigate("/category-page", {
      state: { categories: categories }
    });
  };

  const handleNavigate = (id, category) => {
    navigate(`/category-details/${id}`, {
      state: { category: category }
    });
  };
  return (
    <Container>
      <div className="categories">
        <div className="categoriesHeader">
          <h1 className="categoriesTitle">Categories</h1>
          <div className="categoriesScrollingOptions">
            <Pagination navigate={paginate} />
          </div>
        </div>
        <div className="categoryContainer">
          {categories.map((category) => (
            <div
              className="categoryCard"
              key={category.id}
              onClick={() => handleNavigate(category.id, category)}
            >
              <img src={category.img} alt="img" />
              <h1>{category.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Categories;
