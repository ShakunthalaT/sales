import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Define the data for the pie chart
const data = [
  { name: "WooCommerce Store", value: 1483 },
  { name: "Shopify Store", value: 1175 },
];

// Define colors for the pie chart slices
const COLORS = ["#F08080", "#33f6ff"];

const ChartPie = () => (
  <PieChart width={400} height={400}>
    <Pie data={data} cx={200} cy={200} fill="#8884d8" dataKey="value">
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend iconType="circle" />
  </PieChart>
);

export default ChartPie;
