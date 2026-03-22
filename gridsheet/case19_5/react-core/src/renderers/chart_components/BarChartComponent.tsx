import React from 'react';
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

//import studyDataList from './studyData';
// width 700
// height 500

/*
const testdata = [
 {
   name: "1月",
   contract: 4000,
   cancellation: 2400,
 },
 {
   name: "2月",
   contract: 3000,
   cancellation: 1398,
 },
 {
   name: "3月",
   contract: 2000,
   cancellation: 9800,
 },
 {
   name: "4月",
   contract: 2780,
   cancellation: 3908,
 },
 {
   name: "5月",
   contract: 1890,
   cancellation: 4800,
 },
 {
   name: "6月",
   contract: 2390,
   cancellation: 3800,
 },
];
*/

const BarChartComponent = ({data, width, height}) => 



(
  <div className="container">

    <BarChart
         width={width}
         height={height}
         data={data}
         margin={{
           top: 20,
           right: 30,
           left: 20,
           bottom: 5,
         }}
       >
         <XAxis dataKey="name" />
         <YAxis />
         <Legend />
         <Bar dataKey="contract" fill="#82ca9d" />
         <Bar dataKey="cancellation" fill="#8884d8" />
       </BarChart>

  </div>
);

export default BarChartComponent;

