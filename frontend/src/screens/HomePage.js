import React from "react";
import "../assets/stylesheets/HomePage.css";
import OutfitOfTheWeekBanner from "../components/OutfitOfTheWeekBanner";
import BelowOOTW from "../components/BelowOOTW"
const HomePage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="homePgCon mt-5">
        <OutfitOfTheWeekBanner />
        <BelowOOTW />
      </div>
    </div>
  );
};

export default HomePage;
