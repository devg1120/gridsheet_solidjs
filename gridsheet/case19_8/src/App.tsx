import React, { useState, useEffect, useContext } from "react";
//import { GridSheet, useHub, type HubProps } from '@gridsheet/react-core';

import { Table } from "../react-core/src/lib/table";
import * as operation from "../react-core/src/lib/operation";
import { updateTable } from "../react-core/src/store/actions";
import { Context } from "../react-core/src/store";

import {
  GridSheet,
  GridSheetPassive,
  useHub,
  makeBorder,
  type HubProps,
  Renderer,
  CheckboxRendererMixin,
  ThousandSeparatorRendererMixin,
  ChartTestRendererMixin,
  ChartTest2RendererMixin,
  ChartTest3RendererMixin,
  ChartTest4RendererMixin,
  ChartTest5RendererMixin,
  ChartTest6RendererMixin,
  ChartTest7RendererMixin,
  ChartTest8RendererMixin,
  ChartTest9RendererMixin,
  ChartTest10RendererMixin,
  ChartTest11RendererMixin,

  OtherCellDependRendererMixin,

} from "../react-core/src/index";

import { a2p, x2c, p2a, y2r, grantAddressAbsolute } from "../react-core/src/lib/converters";

import type { CellsByAddressType } from "../react-core/src/types";

import studyDataList from './data/studyData';
import barDataList from './data/barData';
import barMultiDataList from './data/barMultiData';
import pieDataList from './data/pieData';
import radarDataList from './data/radarData';

function colNumToId(colNum: number): string {
  let columnName = "";
  while (colNum > 0) {
    let modulo = (colNum - 1) % 26;
    columnName = String.fromCharCode(65 + modulo) + columnName;
    colNum = Math.floor((colNum - modulo) / 26);
  }
  return columnName;
}


const App: React.FC = () => {
  const [enableDecimalLabeler, setEnableDecimalLabeler] = useState(false);


  const hubProps: HubProps = {
    renderers: {
        checkbox: new Renderer({ mixins: [CheckboxRendererMixin] }),
        thousand_separator: new Renderer({ mixins: [ThousandSeparatorRendererMixin] }),
        chart_test: new Renderer({ mixins: [ChartTestRendererMixin] }),
        chart_test2: new Renderer({ mixins: [ChartTest2RendererMixin] }),
        chart_test3: new Renderer({ mixins: [ChartTest3RendererMixin] }),
        chart_test4: new Renderer({ mixins: [ChartTest4RendererMixin] }),
        chart_test5: new Renderer({ mixins: [ChartTest5RendererMixin] }),
        chart_test6: new Renderer({ mixins: [ChartTest6RendererMixin] }),
        chart_test7: new Renderer({ mixins: [ChartTest7RendererMixin] }),
        chart_test8: new Renderer({ mixins: [ChartTest8RendererMixin] }),
        chart_test9: new Renderer({ mixins: [ChartTest9RendererMixin] }),
        chart_test10: new Renderer({ mixins: [ChartTest10RendererMixin] }),
        chart_test11: new Renderer({ mixins: [ChartTest11RendererMixin] }),

        othercell_depend: new Renderer({ mixins: [OtherCellDependRendererMixin] }),

      },
    labelers: {},
    onInit: ({ table }) => {
      console.log(`Table initialized: ${table.sheetName}`);
    },
    onChange: () => {
      console.log(`Change cell: `);
    },
  };
  const hub = useHub(hubProps);

  useEffect(() => {
    hubProps.labelers!.decimal = enableDecimalLabeler
      ? (n: number) => String(n)
      : null;
    hub.wire.transmit(hubProps);
  }, [enableDecimalLabeler]);

  let cells: CellsByAddressType = {};
  /*
    for ( let rowNum = 1 ; rowNum < 500 ; rowNum++ ) {
    for ( let colNum = 1 ; colNum < 140 ; colNum++ ) {
        const columnName = colNumToId(colNum);
        const cellName = columnName  +  String(rowNum);
	//console.log(cellName);
	cells[cellName] = { value: "#" }

    }
  }
*/

  let cellsmod: CellsByAddressType = {
    /*
            default: {                   // cell size
              width: 100,
              height: 20,
              style: { fontSize: "14px" },
              default: { labeler: "decimal" },
            },
	    0: { height:20, width: 100,
	         //freeze : 'C3',

	    },  // header size
    */
    B2: {
      value: "OK",
      style: {
        transform: "matrix(1, -0.75, 0, 1, 0, 15)",
      },
    },

    A4: {
      value: "TEST2",
      colsize: 2,
      rowsize: 2,
      style: {
        backgroundColor: "#ccff99",
      },
    },

    //C3: { value: "=SUM(Sheet1!A2:B3)" },
    X20: { value: 789 },
    /*
            "A7:E7": {
              style: {
                ...makeBorder({
                  bottom: "4px double #000000",
                }),
              },
            },
	    */
    D8: {
      value: "abc",
      style: {
        backgroundColor: "#3498db",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
    },

    //solid	一本線　初期値
    //double	二重線
    //dotted	点線
    //dashed	破線
    //wavy	波線

    A14: {
      style: { height: "40px" },
    },

    C14: {
      value: "製品",

      style: {
        textAlign: "left",
        verticalAlign: "bottom",
      },
    },

    D14: {
      value: "コード",

      style: {
        textAlign: "center",
        verticalAlign: "center",
      },
    },
    //https://gridsheet.walkframe.com/api-reference/props
    E14: {
      value: "価格",

      style: {
        textAlign: "right",
        verticalAlign: "top",
      },
    },
    /*1
            "C14:E14": {
              style: {
                ...makeBorder({
                  bottom: "4px double #000000",
                }),
              },
            },
            "C13:E13": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },
            "C15:E15": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },
            "C16:E16": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },

            "B14:B16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "C14:C16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "D14:D16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "E14:E16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
*/
  };
  /*
   for (const key in cellsmod) {
      //console.log(key, spans[key]);
      Object.assign(cells[key], cellsmod[key])
  }
*/

  cells["4"] = { height: 60 };

  cells["B4"] = {
    value: "製品",
    style: {
      textAlign: "right",
      verticalAlign: "top",
    },
  };
  cells["C4"] = {
    value: "コード",
    style: {
      textAlign: "center",
      verticalAlign: "center",
    },
  };
  cells["D4"] = {
    value: "価格",
    style: {
      textAlign: "left",
      verticalAlign: "bottom",
    },
  };

  cells["2"] = { style: { height: "60px" } };

  cells["E2"] = {
    value: "",
    style: {
      backgroundImage: 'url(\"./top2bottom.svg\")',
      backgroundRepeat: "no-repeat" /* 繰り返さない */,
      backgroundSize:
        "cover" /* 要素全体を覆うように拡大縮小（はみ出しは隠す） */,
      backgroundPosition: "center" /* 中央に配置 */,
    },
  };
  cells["C2"] = {
    value: "2",
    style: {
      backgroundImage: 'url(\"./bottom2top.svg\")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

     //backgroundImage: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /%3E%3C/svg%3E');
     
    

     //const image= "url(\'data:image/svg+xml, " + svgdata + "\')";
     //console.log(svgdata)
     //console.log(image)


  cells["G2"] = {
    style: {
      backgroundImage: 'url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"> <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\"/> </svg>\')',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

   const image =  'url(\'data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"> <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"blue\"/> </svg>\')';

  cells["H2"] = {
    style: {
      backgroundImage: image,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };



  cells["G4"] = {
    style: {
      //backgroundImage: image2,
      backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /%3E%3C/svg%3E\')',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

     const r = "30";
     const color = "green"
     const svgdata = `
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> 
         <circle cx="50" cy="50" r="${r}" stroke="black" stroke-width="3" fill="${color}"/> 
     </svg>
     `

     const svgdata_enc = encodeURIComponent(svgdata);

     const image2= "url(\'data:image/svg+xml, " + svgdata_enc + "\')";


  cells["H4"] = {
    style: {
      backgroundImage: image2,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };

  cells["F"] = {
                labeler: 'Done',
                width: 50,
                renderer: 'checkbox',
                style: {
                  backgroundColor: '#f8f9fa',
                },
                alignItems: 'center',
                justifyContent: 'center',
              };
  cells["F1"] = { value:false };
  cells["F2"] = { value:true };


  cells["G"] = {

                labeler: 'Count',
                width: 150,
                renderer: 'thousand_separator',
                style: {
                  backgroundColor: '#f8f9fa',
                  textAlign: "right",
                  //verticalAlign: "center",
                },
                //alignItems: 'center',
                //justifyContent: 'right',
              };
  cells["G1"] = { value:123456789 };
  cells["G2"] = { value:888888 ,};
  
  cells["B6"] = {
                //value: true,
                //renderer: 'checkbox',
                value: "OK",
                renderer: 'chart_test',
  };
  cells["C6"] = {
                //value: true,
                //renderer: 'checkbox',
                value: "OK2",
                renderer: 'chart_test2',
  };
  cells["D6"] = {
                value: true,
                //renderer: 'checkbox',
                //value: "OK2",
                renderer: 'chart_test3',
  };
  /*
  cells["B8"] = {
                value: ["A","B","C","E"],
		colsize: 4, 
		rowsize: 5,
		border: "solid #99ccf 1pxf",
		backgroundColor: "#99ccff",
                //renderer: 'checkbox',
                //value: "OK2",
                renderer: 'chart_test4',
  };
*/

  cells["B8"] = {
                //value: studyDataList ,
                //value: { type: "study_chart", data: studyDataList} ,
                value: { type: "bar_chart", data: barDataList} ,
		colsize: 4, 
		rowsize: 5,
                renderer: 'chart_test5',
  };

  cells["B14"] = {
                //value: studyDataList ,
                value: { type: "study_chart", data: studyDataList} ,
                //value: { type: "bar_chart", data: barDataList} ,
		colsize: 5, 
		rowsize: 6,
                renderer: 'chart_test5',
  };

  cells["H13"] = {value: 111};
  //const { cdata, setCdata } = useState(table.wire.data["A1"]);
  cells["I13"] = {value: "=H13*2"};


  cells["G8"] = {
                value: { type: "pie_chart", data: pieDataList} ,
		colsize: 3, 
		rowsize: 5,
                renderer: 'chart_test5',
  };

const radarDataList2 = [...radarDataList]; 
  radarDataList2[0] = { subject: 'aaaa', A: 50, B:200, fullMark : 90 }
  //const { radarData, setRadarData } =  useState( radarDataList2 );

/*
useEffect(() => {
    console.log("table change");
}, [table]);
*/

  cells["G14"] = {
                value: { type: "radar_chart", data: radarDataList} ,
                //value: { type: "radar_chart", data: radarData} ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test5',
  };

  cells["J8"] = {
                value: radarDataList2 ,
                //value: { type: "radar_chart", data: radarData} ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test6',
  };

  cells["E4"] = {
    value: 3333333,
    renderer: 'thousand_separator',
    style: {
      textAlign: "right",
      verticalAlign: "center",
    },
  };

  cells["A1"] = {
    //value: ["G1","G2"],
    value: "=C2",
    //value: radarDataList2 ,
    renderer: 'othercell_depend',
    style: {
      textAlign: "right",
      verticalAlign: "center",
    },
  };

  cells["A2"] = {
    value: "=C2",
    style: {
      textAlign: "right",
      verticalAlign: "center",
    },
  };

  cells["A21"] = { value: "A" };
  cells["A22"] = { value: "B" };
  cells["A23"] = { value: "C" };
  cells["A24"] = { value: "D" };
  cells["B21"] = { value: 100 };
  cells["B22"] = { value: 200 };
  cells["B23"] = { value: 300 };
  cells["B24"] = { value: 300 };

  cells["C23"] = { value: "=SUM(B21:B23)" };
  cells["D23"] = { value: "=SUM(B21:C23)" };
  //cells["D23"] = { value: "=ARRAY(B21:B23)" };
  cells["A25"] = { value: "=ARRAY(B21:B24)" ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test7',
  };

  cells["G23"] = { value: "A" };
  cells["G24"] = { value: "B" };
  cells["G25"] = { value: "C" };
  cells["G26"] = { value: "D" };
  cells["H23"] = { value: 100 };
  cells["H24"] = { value: 200 };
  cells["H25"] = { value: 300 };
  cells["H26"] = { value: 300 };

  //cells["G27"] = { value: "=DICT(G23:H26)" ,
  //cells["G27"] = { value: "=ARRAY(H23:H26)" ,
  
  /*
   *  ARRAY
   *     number
   *     number
   *     number
   *
   */

  /*
   *  ARRAYDICT
   *     string number
   *     string number
   *     string number
   *
   */

  /*
   *  ARRAY_2D_DICT
   *     -      string  string  string
   *     string number  number  number
   *     string number  number  number
   *     string number  number  number
   *
   */
  cells["G27"] = { value: "=ARRAYDICT(G23:H26)" ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test8',
  };


  cells["D36"] = { value: barMultiDataList ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test9',
  };



  cells["A37"] = { value: "date" }
  cells["B37"] = { value: "pv" }
  cells["C37"] = { value: "uv" }
  cells["A38"] = { value: "color" }
  cells["B38"] = { value: "blue" }
  cells["C38"] = { value: "red" }

  let p = a2p("A39")
  let a = p2a(p)

  for (let i = 0; i <  barMultiDataList.length ; i++ ) {
     //console.log(barMultiDataList[i]); 
     let date = barMultiDataList[i].date; 
     let pv   = barMultiDataList[i].pv; 
     let uv   = barMultiDataList[i].uv; 

     let s = structuredClone(p);
     cells[p2a(s)] = { value: date }
     s = { y:s.y  , x: s.x +1}
     cells[p2a(s)] = { value: pv   }
     s = { y:s.y  , x: s.x +1}
     cells[p2a(s)] = { value: uv   }

     p = { y:p.y +1 , x: p.x }
  }
/*
  cells["D44"] = { value: barMultiDataList ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test9',
  };
*/

/*
  cells["D44"] = { value: barMultiDataList ,
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test10',
  };
*/


  cells["D44"] = { value: "=ARRAY2DDICT(A37:C50)" ,    // 14 x 3 =  42
		colsize: 4, 
		rowsize: 8,
                renderer: 'chart_test11',
  };


  cells["M80"] = {
    value: "X",
  };

  const { wire } = hub;

  let minNumRows = 1;
  let maxNumRows = -1;
  let minNumCols = 1;
  let maxNumCols = -1;
  let sheetName = "Sheet1";

  /*
   const table = new Table({
      minNumRows,
      maxNumRows,
      minNumCols,
      maxNumCols,
      sheetName,
      hub: wire,
    });
*/

  const [table, setTable] = useState(
    new Table({
      minNumRows,
      maxNumRows,
      minNumCols,
      maxNumCols,
      sheetName,
      hub: wire,
    }),
  );

  table.initialize(cells);
  table.setTotalSize();

/*
         let id = table.getId({x:8,y:13});
	 //console.log(table.wire.data[id].value);

	 //const { td, setTd} = useState(table.wire.data[id].value);
	 const { td, setTd} = useState(table.wire.data[id]);

useEffect(() => {
	 console.log("td change", table.wire.data[id].value);
}, [td]);
*/

   const update_ = () => {
         console.log("UPDATE");
         const { x, y } = a2p("H13");
         let id = table.getId({x:x,y:y});
         let address = table.getAddressById(id);
         //console.log(address);
	 if (table.wire.data[id] === undefined) { return }
	 let v = parseInt(table.wire.data[id].value) ;
	 let new_v = String(v +1);
	 //table.write({point:{x:x,y:y}, value:new_v, updateChangedAt:true});
	 table.update({diff: {"H13":{value:new_v}} ,partial: true, operation: operation.Write } );
         hub.wire.transmit(hubProps);
	 //console.log(table.wire.data[id].value);
   }

   const update = () => {
         console.log("UPDATE");
	 const LOC = "H13";
         const { x, y } = a2p(LOC);
         let id = table.getId({x:x,y:y});
         let address = table.getAddressById(id);
         //console.log(address);
	 if (table.wire.data[id] === undefined) { return }
	 let v = parseInt(table.wire.data[id].value) ;
	 let new_v = String(v +1);
	 //table.write({point:{x:x,y:y}, value:new_v, updateChangedAt:true});
	 table.update({diff: {[LOC]:{value:new_v}} ,partial: true, operation: operation.Write } );
         hub.wire.transmit(hubProps);
	 //console.log(table.wire.data[id].value);
   }
   const update2 = () => {
         console.log("UPDATE2");
	 const LOC = "J8";

          const { x, y } = a2p(LOC);
         let id = table.getId({x:x,y:y});
         let address = table.getAddressById(id);
         console.log(address);
	 if (table.wire.data[id] === undefined) { return }
	 let v = table.wire.data[id].value ;
	 //console.log(v);
	 const new_v = [...v];
         const copy = structuredClone(new_v[0]);
         copy.A = 90;
         new_v[0] = copy;
	 table.update({diff: {[LOC]:{value:new_v}} ,partial: true, operation: operation.Write } );

         hub.wire.transmit(hubProps);

   }

   const update3__ = () => {
   }

   const update3 = () => {

         console.log("UPDATE3");
	 const LOC = "G14";

         const { x, y } = a2p(LOC);
         let id = table.getId({x:x,y:y});
         let address = table.getAddressById(id);
         console.log(address);
	 if (table.wire.data[id] === undefined) { return }
	 let v = table.wire.data[id].value ;
	 //console.log(v);
	 
         const new_v = structuredClone(v);
         const data = [...new_v.data];
         const copy = structuredClone(data[0]);
         copy.A = 30;
         data[0] = copy;
         new_v.data = data;
	 table.update({diff: {[LOC]:{value:new_v}} ,partial: true, operation: operation.Write } );

         hub.wire.transmit(hubProps);

   }

   const update4 = () => {

         console.log("UPDATE4");
	 const LOC = "G8";

         const { x, y } = a2p(LOC);
         let id = table.getId({x:x,y:y});
         let address = table.getAddressById(id);
         console.log(address);
	 if (table.wire.data[id] === undefined) { return }
	 let v = table.wire.data[id].value ;
	 //console.log(v);
	 
         const new_v = structuredClone(v);
         const data = [...new_v.data];
         const copy = structuredClone(data[0]);
         //copy.students = 1800;
         let tmp = parseInt(copy.students) + 300;
         copy.students = tmp;
         data[0] = copy;
         new_v.data = data;
	 table.update({diff: {[LOC]:{value:new_v}} ,partial: true, operation: operation.Write } );

         hub.wire.transmit(hubProps);

   }


  //console.log(cells["E5"]);
  //console.log(cells["C10"]);
  //console.log(cells["F12"]);

  //style={{ width: 800 }}
  return (
    <main>
    <button onClick={update}>H13</button>
    <button onClick={update2}>J8</button>
    <button onClick={update3}>G14</button>
    <button onClick={update4}>G8</button>

      <div className="grid-container">
        <GridSheetPassive
          hub={hub}
          table={table}
          /*
          initialCells={{
            
	   // '0': {
           //       height: 60,  // Header height
           //       width: 180,   // Header width
           //     },
		
            A1: { value: "Hello" },
            B1: { value: "React", style: { backgroundColor: "#00bfff" } },
            A2: { value: 123 },
            B2: { value: 456 },
            A3: { value: 789 },
            C6: { value: "=SUM(A2:B2)" },
            D7: { value: 789 },
            E8: { value: 789 },
            X20: { value: 789 },
          }}
*/

          options={{
            //mode: 'dark',
            sheetHeight: 400,
            sheetWidth: 800,
          }}
          //sheetName="Sheet1"
          sheetName={sheetName}
          //style={{ width: 800, height: 300 }}
          //
        />

        <br />

        <GridSheetPassive
          hub={hub}
          table={table}
          //initialCells={ cells }
          options={
            {
              //mode: 'dark',
              //sheetHeight: 400,
              //sheetWidth: 800,
            }
          }
          sheetName="Sheet1"
          //style={{ width: 800, height: 300 }}
        />

        <br />

        <GridSheet
          hub={hub}
          initialCells={{
            default: {
              // cell size
              width: 100,
              height: 20,
              style: { fontSize: "14px" },
              default: { labeler: "decimal" },
            },
            0: {
              height: 20,
              width: 100,
              //freeze : 'C3',
            }, // header size
            A4: {
              value: "TEST",
              colsize: 2,
              rowsize: 2,
              style: {
                backgroundColor: "#ccff99",
              },
            },

            C3: { value: "=SUM(Sheet1!A2:B3)" },
            X20: { value: 789 },
            "A7:E7": {
              style: {
                ...makeBorder({
                  bottom: "4px double #000000",
                }),
              },
            },
            D8: {
              value: "abc",
              style: {
                backgroundColor: "#3498db",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              },
            },

            //solid	一本線　初期値
            //double	二重線
            //dotted	点線
            //dashed	破線
            //wavy	波線

            A14: {
              style: { height: "40px" },
            },

            C14: {
              value: "製品",

              style: {
                textAlign: "left",
                verticalAlign: "bottom",
              },
            },

            D14: {
              value: "コード",

              style: {
                textAlign: "center",
                verticalAlign: "center",
              },
            },
            //https://gridsheet.walkframe.com/api-reference/props
            E14: {
              value: "価格",

              style: {
                textAlign: "right",
                verticalAlign: "top",
              },
            },

            "C14:E14": {
              style: {
                ...makeBorder({
                  bottom: "4px double #000000",
                }),
              },
            },
            "C13:E13": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },
            "C15:E15": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },
            "C16:E16": {
              style: {
                ...makeBorder({
                  bottom: "1px solid #000000",
                }),
              },
            },

            "B14:B16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "C14:C16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "D14:D16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
            "E14:E16": {
              style: {
                ...makeBorder({
                  right: "1px solid #000000",
                }),
              },
            },
          }}
          //style={{ width: 800, height: 300 }}
          options={{}}
          sheetName="Sheet2"
        />
      </div>
      {/* Labeler Control */}
      <div className="labeler-control">
        <label>
          <input
            type="checkbox"
            checked={enableDecimalLabeler}
            onChange={(e) => setEnableDecimalLabeler(e.target.checked)}
          />
          Enable Decimal Labeler for Sheet2
        </label>
      </div>
    </main>
  );
};

export default App;
