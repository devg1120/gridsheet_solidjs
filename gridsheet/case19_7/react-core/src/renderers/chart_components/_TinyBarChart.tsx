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

type HashArgs = {
  data: Array<any>;
  width:  string | number;
  height: string | number;
};
const TinyBarChart = ({data, width , height}) => (
//const TinyBarChart = ({data, width , height}: HashArgs): any => (

  <div className="container">
    <BarChart
      style={{ width: {width} , height: {height} , maxWidth: '100%' , maxHeight: '100%', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  </div>
);

export default TinyBarChart;

