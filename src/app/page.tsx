import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/ui/PageTItle";
import Image from "next/image";

import { User, ShoppingCart, Banknote, LineChart } from "lucide-react";
import BarChart from "@/components/BarChart";
import Dot from "@/components/ui/dot";
import CustomerPieChart from "@/components/CustomerPieChart";
import CustomLineChart from "@/components/CustomLineChart";

const cardData: CardProps[] = [
  { label: "Customers", amount: "4,772", increase: "17.73", icon: User },
  { label: "Orders", amount: "1,228", increase: "24.32", icon: ShoppingCart },
  { label: "Revenue", amount: "1,999", increase: "11.86", icon: Banknote },
  { label: "Growth", amount: "1,500", increase: "42.56", icon: LineChart },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full bg-gray-100 min-h-screen">
      <PageTitle title="Dashboard" className="mt-5 ml-4 p-2" />
      <section className="grid gap-4 transition-all grid-cols-2 max-lg:grid-cols-1">
        <section className="grid grid-cols-2 gap-4 gap-x-8 max-sm:grid-cols-1 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              amount={card.amount}
              label={card.label}
              increase={card.increase}
              icon={card.icon}
            />
          ))}
        </section>
        <CardContent>
          <p className="p-2 font-semibold"> Projections vs Actuals</p>
          <p className="w-full flex justify-end items-center gap-1">
            {" "}
            <Dot color="bg-gray-200" />
            Projection
            <Dot color="bg-red-500" /> Actuals
          </p>
          <BarChart />
        </CardContent>
      </section>
      <section className="grid gap-4 transition-all grid-cols-2 max-lg:grid-cols-1">
        <CardContent>
          <p className="p-2 font-semibold">Total Customers</p>
          <p className="w-full flex justify-end items-center gap-1">
            {" "}
            <Dot color="bg-blue-600" />
            This Year
            <Dot color="bg-red-500" /> Last Year
          </p>
          <CustomLineChart />
        </CardContent>
        <CardContent>
          <p className="p-2 font-semibold">Customer Segmentations</p>
          <CustomerPieChart />
        </CardContent>
      </section>
    </div>
  );
}
