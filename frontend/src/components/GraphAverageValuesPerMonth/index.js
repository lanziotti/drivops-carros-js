import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Média Valores Carros X Mês", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export default function GraphAverageValuesPerMonth() {
  return (
    <Chart chartType="ColumnChart" width="80%" height="400px" data={data} />
  );
}
