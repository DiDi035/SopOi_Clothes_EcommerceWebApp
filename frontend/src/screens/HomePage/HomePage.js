import React from "react";
import "./HomePage.css";
import OutfitOfTheWeekBanner from "../../Container/OutfitOfTheWeekBanner/OutfitOfTheWeekBanner";
import BelowOOTW from "../../Container/BelowOOTW/BelowOOTW";
const HomePage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="homePgCon mt-3">
        <OutfitOfTheWeekBanner />
        <BelowOOTW />
      </div>
    </div>
  );
};

export default HomePage;
