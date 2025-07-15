import React from "react";
import { HomeAnalytics } from "./Features/HomeAnalytics";
import { CountriesAnalytics } from "./Features/CountriesAnalytics";
import { ChartAnalytics } from "./Features/ChartAnalytics";
// Import dynamic from next/dynamic
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

// Dynamically import ChartAnalytics, ensuring it's only rendered on the client side
const DynamicChartAnalytics = dynamic(
  () => import("./Features/ChartAnalytics").then((mod) => mod.ChartAnalytics),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[200px]">
        <Loader2 className="animate-spin" />
      </div>
    ),
  }
);
const HomePage = () => {
  return (
    <div className="space-y-5">
      <HomeAnalytics />
      <CountriesAnalytics />
      <DynamicChartAnalytics />
    </div>
  );
};

export default HomePage;
