import React from "react";
import { HomeAnalytics } from "./Features/HomeAnalytics";
import { CountriesAnalytics } from "./Features/CountriesAnalytics";

const HomePage = () => {
  return (
    <div className="space-y-5">
      <HomeAnalytics />
      <CountriesAnalytics />
    </div>
  );
};

export default HomePage;
