import type { RenderProps } from "./core";
import StudyChart from './chart_components/StudyChart';
//import TinyBarChart from './chart_components/TinyBarChart';
import BarChartComponent from './chart_components/BarChartComponent';
import PieChartComponent from './chart_components/PieChartComponent';
import RadarChartComponent from './chart_components/RadarChartComponent';

import { useState } from 'react';
/*
type Dict = {
	key: string;
	value: number;
}
*/

import type { Dict} from '../formula/functions/array_dict';

export const ChartTest8RendererMixin  = {
  array({ value , sync, table, point }: RenderProps<Array<Dict>>): any {
  //array({ value , sync, table, point }: RenderProps<Array<number>>): any {
  //object({ value, sync, table, point }: RenderProps<object>): any {
  /*
     console.log(point);
     console.log(table.getId(point));
     console.log(table.getCellByPoint(point));
     let id = table.getId(point);
     let address = table.getAddressById(id);
     console.log(id, address);
     //console.dir(table.wire.data[id]);
     let cell =table.getCellByPoint(point);
     console.dir(cell);
*/

/*
     let cell =table.getCellByPoint(point);
     //console.log(cell.collsize);
     //console.log(cell.rowsize);
     let w = table.getCellByPoint({ y:0, x:point.x}).width ;
     let h = table.getCellByPoint({ y:point.y, x:0}).height;
     let width  = w *4;
     let height = h * 5;
*/

type PieData = {
   name: string;
   students: number;
};

/*
console.log(value[0]);
const pieDataList: PieData[] = [
        { name: value[0].key, students: value[0].value },
        { name: value[1].key, students: value[1].value },
        { name: value[2].key, students: value[2].value },
        { name: value[3].key, students: value[3].value }
];
*/


let pieDataList: PieData[] = [];
        pieDataList.push({ name: value[0].key, students: value[0].value })
        pieDataList.push({ name: value[1].key, students: value[1].value })
        pieDataList.push({ name: value[2].key, students: value[2].value })
        pieDataList.push({ name: value[3].key, students: value[3].value })


     let width  = 0;
     let height = 0;  
     let cell =table.getCellByPoint(point);
     if (cell === undefined) { return "Error" }
     for (let i = 0; i < (cell.colsize ?? 1); i++) {
          width += table.getCellByPoint({ y:0, x:point.x + i})?.width ?? 0;
     }
     for (let i = 0; i < (cell.rowsize ?? 1); i++) {
          height += table.getCellByPoint({ y:point.y + i, x:0})?.height ?? 0;
     }

    /*
         let id = table.getId({x:8,y:13});
         let address = table.getAddressById(id);
         console.log(id, address);
         console.log(table.wire.data[id].value);
	 */
         //const { cdata, setCdata } = useState(table.wire.data[id].value);
         //console.log(cdata);
         //console.log(value.data[0]);
	 //value.data[0].A = cdata;
	
       return (
           <PieChartComponent table={table} data={pieDataList} width={width} height={height} />
       );
  },
};
