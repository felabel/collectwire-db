// src/components/home/CountriesAnalytics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import usa from "@/assets/usa.svg"; // Adjust the path as necessary
import nigeria from "@/assets/nigeria.svg";
import japan from "@/assets/japan.svg"; // Assuming these are the correct paths for the flags
import france from "@/assets/france.svg";
import jamaica from "@/assets/jamaica.svg";

interface CountryData {
  flag: any;
  name: string;
  count: number;
}

const MAX_COUNT = 16;

const businessCountriesData: CountryData[] = [
  { flag: usa, name: "USA", count: 16 },
  { flag: nigeria, name: "Nigeria", count: 12 },
  { flag: japan, name: "Japan", count: 10 },
  { flag: france, name: "France", count: 8 },
  { flag: jamaica, name: "Jamiaca", count: 7 },
];

// Data for Employee Countries (looks identical in the screenshot, so reusing structure)
const employeeCountriesData: CountryData[] = [
  { flag: usa, name: "USA", count: 16 },
  { flag: nigeria, name: "Nigeria", count: 12 },
  { flag: japan, name: "Japan", count: 10 },
  { flag: france, name: "France", count: 8 },
  { flag: jamaica, name: "Jamiaca", count: 7 },
];

export function CountriesAnalytics() {
  console.log("usa image path:", nigeria);
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <CountryCard title="Business Countries" data={businessCountriesData} />
      <CountryCard title="Employee Countries" data={employeeCountriesData} />
    </section>
  );
}

interface CountryCardProps {
  title: string;
  data: CountryData[];
}

function CountryCard({ title, data }: CountryCardProps) {
  return (
    <Card className="rounded-lg border-none bg-cwg-01 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-2">
        <CardTitle className="text-lg md:text-2xl font-medium text-cwg-darkgreen">
          {title}
        </CardTitle>
        <Button
          variant="ghost"
          className="h-auto p-2 rounded-full text-xs font-semibold text-text-secondary border  border-cwg-02 hover:bg-transparent hover:text-text-primary flex items-center justify-center"
        >
          <span>VIEW ALL</span> <ChevronRight stroke="#586657" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="space-y-4">
          {data.map((country, index) => (
            <div key={index} className="flex items-center gap-4 ">
              <div className="flex items-center min-w-[80px] max-w-[80px] text-sm md:text-[18px] text-cwg-08">
                <Image
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  width={21}
                  height={15}
                  className="mr-2 rounded-[2px] "
                />
                {country.name}
              </div>
              <div className="flex w-full items-center ">
                <div
                  className=" h-2 rounded-full bg-cwg-02"
                  style={{ width: `${(country.count / MAX_COUNT) * 100}%` }}
                ></div>
                <span className=" text-sm font-medium text-text-secondary pl-2">
                  {country.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
