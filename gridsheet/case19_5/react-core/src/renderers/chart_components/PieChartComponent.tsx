import React, { useState } from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import {
 BarChart,
 Bar,
 ResponsiveContainer,
} from "recharts";

import { PieChart, Pie, Cell  } from "recharts";


const RADIAN = Math.PI / 180;


const renderCustomizedLabel: React.FunctionComponent<{
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  name: string;
}> = ({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 30;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="blue"
      textAnchor="central"
    >
      {`${name}`}
    </text>
  );
};


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// https://www.geeksforgeeks.org/reactjs/create-a-pie-chart-using-recharts-in-reactjs/
//

const PieChartComponent = ({table, data, width, height}) => 

(
  <div className="container">
      <PieChart width={width} height={height}>
            <Pie

                data={data}
                dataKey="students"
                outerRadius={height/2}
                fill="green"
                style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
                label={renderCustomizedLabel}

            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>


  </div>
);

export default PieChartComponent;

