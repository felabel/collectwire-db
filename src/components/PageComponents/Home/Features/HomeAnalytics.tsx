import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Import Shadcn Card components
import { cn } from "@/lib/utils";
interface MetricCardProps {
  title: string;
  value: string;
  isCurrency?: boolean;
}

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
    <section className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {analyticsData.map((data, index) => (
        <MetricCard
          key={index}
          title={data.title}
          value={data.value}
          isCurrency={data.isCurrency}
        />
      ))}
    </section>
  );
}

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
            "m-0 p-0 leading-none text-[24px] lg:text-[28px] xl:text-[42px] font-semibold text-cwg-darkgreen "
          )}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
