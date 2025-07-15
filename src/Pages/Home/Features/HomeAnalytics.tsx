// src/components/home/HomeAnalytics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Shadcn Card components
import { cn } from "@/lib/utils"; // Utility for merging Tailwind classes

// Define the interface for a single metric card
interface MetricCardProps {
  title: string;
  value: string;
  isCurrency?: boolean; // Optional prop to indicate if the value is currency
}

// Array containing the data for each of the six metric cards
const analyticsData: MetricCardProps[] = [
  {
    title: "Total Businesses",
    value: "20",
  },
  {
    title: "Total Employees",
    value: "10",
  },
  {
    title: "Total Processed Payrolls",
    value: "10",
  },
  {
    title: "Total Payments",
    value: "$100,000.00",
    isCurrency: true,
  },
  {
    title: "Total Withdrawal",
    value: "$10,000.00",
    isCurrency: true,
  },
  {
    title: "Revenue",
    value: "$100,000.67",
    isCurrency: true,
  },
];

export function HomeAnalytics() {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {analyticsData.map((data, index) => (
        <MetricCard
          key={index} // Using index as key is generally okay for static lists
          title={data.title}
          value={data.value}
          isCurrency={data.isCurrency}
        />
      ))}
    </section>
  );
}

// Helper component for individual metric cards
function MetricCard({ title, value, isCurrency }: MetricCardProps) {
  return (
    <Card className="rounded-lg border-none bg-cwg-01 p-4 lg:p-8 shadow-sm">
      <CardHeader className="p-0 ">
        <CardTitle className="text-lg md:text-xl font-medium text-cwg-06">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p
          className={cn(
            "m-0 p-0 leading-none text-[32px] lg:text-[41px] font-semibold text-cwg-darkgreen "
          )}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
