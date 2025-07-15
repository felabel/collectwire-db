"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  CartesianGrid,
} from "recharts";

const chartData = [
  { name: "Jan", value: 1700 },
  { name: "Feb", value: 1900 },
  { name: "Mar", value: 1600 },
  { name: "Apr", value: 2200 },
  { name: "May", value: 1950 },
  { name: "June", value: 2150 },
  { name: "July", value: 1800 },
  { name: "Aug", value: 2600 },
  { name: "Sept", value: 2000 },
  { name: "Oct", value: 2300 },
  { name: "Nov", value: 1600 },
  { name: "Dec", value: 2250 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="rounded-md bg-cwg-darkgreen px-3 py-1 text-text-white-custom shadow-md">
        <p className="text-sm font-medium text-white">{`$${value.toLocaleString(
          "en-US",
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        )}`}</p>
      </div>
    );
  }
  return null;
};

export function ChartAnalytics() {
  return (
    <Card className="rounded-lg border-none bg-cwg-01 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
        <CardTitle className="text-lg font-semibold text-cwg-darkgreen">
          Analytics
        </CardTitle>
        <Button
          variant="outline"
          className="h-auto rounded-md border border-border-light bg-transparent px-3 py-2 rounded-full text-sm font-medium text-text-secondary hover:bg-border-light hover:text-text-primary"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          Select month range
          <ChevronRight className="ml-2 h-4 w-4" />{" "}
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border-light))"
                opacity={0.5}
              />

              <XAxis
                dataKey="name"
                axisLine={false} // No axis line
                tickLine={false} // No tick marks
                tick={{ fill: "hsl(var(--text-secondary))", fontSize: 12 }} // Custom tick color and size
                interval={0}
                tickMargin={10} // Space between ticks and axis
              />
              {/* Y-Axis (Values) */}
              <YAxis
                axisLine={false} // No axis line
                tickLine={false} // No tick marks
                tickFormatter={(value) =>
                  value === 0 ? "0" : `${value / 1000}k`
                } // Format as 0, 1k, 2k, 3k
                tick={{ fill: "hsl(var(--text-secondary))", fontSize: 12 }} // Custom tick color and size
                orientation="left"
                tickMargin={5}
                ticks={[0, 1000, 2000, 3000]}
              />
              {/* Tooltip */}
              <Tooltip
                content={<CustomTooltip />} // Use our custom tooltip component
                cursor={{
                  stroke: "hsl(var(--cwg-darkgreen))", // Cursor line color
                  strokeWidth: 1,
                }}
              />
              {/* Area Chart */}
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--cwg-darkgreen))" // Line color
                strokeWidth={2}
                fill="url(#colorValue)" // Fill with gradient
                activeDot={{
                  r: 4,
                  fill: "hsl(var(--cwg-darkgreen))",
                  stroke: "hsl(var(--cwg-darkgreen))",
                  strokeWidth: 2,
                }} // Dot on hover
              />
              {/* Gradient Definition for Area Fill */}
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--gradient-fill-green))"
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="91.38%"
                    stopColor="hsl(var(--gradient-fill-green))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              {/* Reference Line for "Sept" */}
              {/* {septData && (
                <ReferenceLine
                  x="Sept" // Data key for the x-axis where the line should be
                  stroke="hsl(var(--cwg-darkgreen))" // Dark green line
                  strokeWidth={2}
                  label={{
                    value: "Sept",
                    position: "bottom",
                    fill: "hsl(var(--cwg-darkgreen))",
                    fontSize: 12,
                    dy: 10, // Adjust vertical position of the label
                    fontWeight: "bold",
                  }}
                />
              )} */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
