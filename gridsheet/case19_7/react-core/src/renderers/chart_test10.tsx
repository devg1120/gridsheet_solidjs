import type { RenderProps } from "./core";
import BarChartComponent from './chart_components/BarChartComponent';
//import BarMultiChartComponent from './chart_components/BarMultiChartComponent';
import BarChartWithMultiXAxis2  from  './chart_components/BarChartWithMultiXAxis2';


import { useState } from 'react';

type Dict = {
date: string,
pv: number,
uv: number
}

export const ChartTest10RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<Array<Dict>>): any {
  //object({ value, sync, table, point }: RenderProps<object>): any {
   let key = "date";

   let bars = [
        { dataKey:"pv",  fill:"#8884dB"},
        //{ dataKey:"uv",  fill:"#82ca9d"},
        { dataKey:"uv",  fill:"red"},
   ];




     let width  = 0;
     let height = 0;  
     let cell =table.getCellByPoint(point);
     if ( cell === undefined) { return "Error" }
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
           <BarChartWithMultiXAxis2 table={table} key={key} bars={bars} data={value} width={width} height={height} />
       );
  },
};
