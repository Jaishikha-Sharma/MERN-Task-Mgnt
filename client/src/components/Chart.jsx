import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "../assets/data";

const Chart = () => {
  return (
    <div style={{ height: '500px', overflowY: 'scroll' }}>
    <ResponsiveContainer width={"100%"} height={500}>
      <BarChart width={150} height={40} data={chartData}>
        <XAxis dataKey="name" />
        <Tooltip/>
        <Legend/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Bar dataKey="total" fill="orange"
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Chart;
