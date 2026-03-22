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

import { BarChart, Bar } from 'recharts';
//import { RechartsDevtools } from '@recharts/devtools';

//import studyDataList from './studyData';
// width 700
// height 500

const TinyBarChart = ({data, width, height}) => (

  <div className="container">
    <BarChart
      style={{ width: {width} , maxWidth: {height} , maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </div>
);

export default TinyBarChart;

