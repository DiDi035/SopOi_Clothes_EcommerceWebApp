import React from "react";
import CategoriesList from "../CategoriesList/CategoriesList";

const StickySideBar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <div>
        <CategoriesList />
      </div>
      <div></div>
    </div>
  );
};

export default StickySideBar;
