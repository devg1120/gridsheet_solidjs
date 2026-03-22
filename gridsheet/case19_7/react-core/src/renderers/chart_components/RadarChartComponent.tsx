import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import { useState , useEffect } from 'react';
import { Table } from "../../lib/table";
/*
type Dict = {
   name: string,
   students: number,
}
*/
/*
type Dict = {
         subject: string,
         A: number,
         B: number,
         fullMark: number
}
*/
interface ComponentProps {
  table: Table;
  data: Array<any>;   
  width: number; 
  height: number; 
}


const RadarChartComponent = ({table, data, width, height} : ComponentProps) => 
{


//const { cdata,  setCdata } = useState( data );

/*

         let id = table.getId({x:8,y:13});
         //let address = table.getAddressById(id);
	 //console.log(table.wire.data[id].value);
	 const { td, setTd} = useState(table.wire.data[id].value);
*/
/*
useEffect(() => {  
  // 何らかの処理  
  console.log("CHANGE" );
} ,[cdata])
*/

//console.log(data[0]["A"]) ;
//data[0]["A"] = 99;

return (
  <div className="container">


 <RadarChart
    cx={width/2}
    cy={height/2}
    outerRadius={70}
    width={width}
    height={height}
    data={data}
  >
    <PolarGrid />
    <PolarAngleAxis dataKey="subject" />
    <PolarRadiusAxis />
    <Radar
      name="Mike"
      dataKey="A"
      stroke="#8884d8"
      fill="#8884d8"
      fillOpacity={1}
    />
  </RadarChart>

  </div>
);
}
export default RadarChartComponent;

