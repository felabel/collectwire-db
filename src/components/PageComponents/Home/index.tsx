import React from "react";
import { HomeAnalytics } from "./Features/HomeAnalytics";
import { CountriesAnalytics } from "./Features/CountriesAnalytics";
import { ChartAnalytics } from "./Features/ChartAnalytics";

const HomePage = () => {
  return (
    <div className="space-y-5">
      <HomeAnalytics />
      <CountriesAnalytics />
      <ChartAnalytics />
    </div>
  );
};

export default HomePage;
