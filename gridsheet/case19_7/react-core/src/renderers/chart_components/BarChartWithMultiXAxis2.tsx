import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { XAxisTickContentProps } from 'recharts';
import type { ReactNode } from 'react';
//import { RechartsDevtools } from '@recharts/devtools';
import { Table } from "../../lib/table";

// #region Sample data

const data_ = [
  {
    date: '2000-01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '2000-06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '2000-07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: '2000-08',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-09',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];



// #endregion
const monthTickFormatter = (tick: string | number | Date): string => {
  const date = new Date(tick);

  return String(date.getMonth() + 1);
};

const renderQuarterTick = (tickProps: XAxisTickContentProps): ReactNode => {
  const { x: xProp, y: yProp, payload, width: widthProp, visibleTicksCount } = tickProps;
  const x = Number(xProp);
  const y = Number(yProp);
  const width = Number(widthProp);
  const { value, offset = 0 } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;

  if (month % 3 === 1) {
    return <text x={x + width / visibleTicksCount / 2 - offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x - offset + width / visibleTicksCount : x - offset) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};

interface ComponentProps {
  table: Table;
  key:   string; 
  bars: Array<any>;   
  data: Array<any>;   
  width: number; 
  height: number; 
}

//const BarChartWithMultiXAxis2 = ({table, key, bars, data, width, height}) => {
const BarChartWithMultiXAxis2 = ({table, key, bars, data, width, height} : ComponentProps) => {
/*
   let bars = [
        { dataKey:"pv",  fill:"#8884dB"},
        { dataKey:"uv",  fill:"#82ca9d"},
   ];
      style={{ width: {width}, maxWidth: {height}, maxHeight: '70vh', aspectRatio: 1.618 }}
      style={{ width: {width}, height: {height} ,maxWidth: {height}, maxHeight: '70vh', aspectRatio: 1.618 }}
*/

  return (
    <BarChart
      width= {width} height= {height}
      style={{ maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
      <XAxis
        dataKey={key}
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={1}
        scale="band"
        xAxisId="quarter"
      />
      <YAxis width="auto" />
      <Tooltip />
      <Legend wrapperStyle={{ paddingTop: '1em' }} />
      {/*
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
      */}
        {
          (function () {
	    let r = []
            for (let i = 0; i < bars.length; i++) {
              r.push(<Bar dataKey={bars[i].dataKey}  fill={bars[i].fill} />);
            }
            return r;
          }())
        }
    </BarChart>
  );
};

export default BarChartWithMultiXAxis2;

