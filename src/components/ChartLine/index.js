import React from "react";
import "./index.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "6/7/2024-7/6/2024", Orders: 4, Sales: 1404, amt: 351 },
  { name: "7/7/2024-7/13/2024", Orders: 10, Sales: 10000, amt: 1000 },
  { name: "7/21/2024-7/24/2024", Orders: 500, Sales: 15000, amt: 1500 },
];

const yAxisTicks = [0, 400, 800, 1200, 1600];
const yAxisTicksRight = [0, 1000, 2000, 3000, 4000];

const ChartLine = () => (
  <div className="line-chart">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          yAxisId="left"
          orientation="left"
          ticks={yAxisTicks}
          tickFormatter={(value) => `${value / 1000}k`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          ticks={yAxisTicksRight}
          tickFormatter={(value) => `${value / 1000}`}
        />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="Orders"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="Sales"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartLine;
