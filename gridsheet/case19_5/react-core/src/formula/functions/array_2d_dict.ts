import { solveTable } from "../solver";
import { Table } from "../../lib/table";
import { BaseFunction } from "./__base";
import { FunctionProps } from "./__base";

//import { ensureNumber } from "./__utils";
import { ensureAny, AnyType, AnyValue  } from "./__utils";
import { FormulaError } from "../evaluator";
import { a2p, x2c, p2a, y2r, grantAddressAbsolute } from "../../lib/converters";

type Dict = {
	key: string;
	value: number;
}

export class Array2dDictFunction extends BaseFunction {
  example = "ARRAYDICT(A2:A100, 101)";
  helpText = ["Returns the sum of a series of numbers or cells."];
  helpArgs = [
    { name: "value1", description: "First number or range." },
    {
      name: "value2",
      description: "Additional numbers or ranges",
      optional: true,
      iterable: true,
    },
  ];


  constructor({ args, table, origin }: FunctionProps) {
      super({args, table, origin} );
      //console.log("args.value", args[0].display({table}));
      let range = args[0].display({table});
      //console.log("range", range);
      this.range = range;
  }

  /*
  protected validate() {

    if (this.bareArgs.length === 0) {
      throw new FormulaError("#N/A", "One or more arguments are required.");
    }
    const spreaded: number[] = [];
    this.bareArgs.forEach((arg) => {
	    
      if (arg instanceof Table) {
        spreaded.push(
          ...solveTable({ table: arg })
            .reduce((a, b) => a.concat(b))
            .map((v) => ensureNumber(v, { ignore: true })),
        );
        return;
      }
      
      spreaded.push(ensureNumber(arg, { ignore: true }));
    });
    this.bareArgs = spreaded;
   
  }
*/

  protected validate() {

    //console.log("range", this.range);
    if (this.bareArgs.length === 0) {
      throw new FormulaError("#N/A", "One or more arguments are required.");
    }
    const spreaded: AnyValue[] = [];
    this.bareArgs.forEach((arg) => {
	    
      if (arg instanceof Table) {
        spreaded.push(
          ...solveTable({ table: arg })
            .reduce((a, b) => a.concat(b))
            .map((v) => ensureAny(v)),
        );
        return;
      }
      
      spreaded.push(ensureANy(arg));
    });
    this.bareArgs = spreaded;
   
  }
  //protected main(...values: Dict[]) {
  protected main(...values: {}) {
    //console.log("array_2d_dict", values.length);
    if (values.length === 0) {
      return [];
    }

    let ids = this.range.split(":");
    let p1 = a2p(ids[0]);
    let p2 = a2p(ids[1]);
    let N = p2.x - p1.x + 1;
    //console.log("N", N);
    
    let key =  values[0].string_;
    let bars = [];
    for (let i = 0; i< N-1 ; i++) {
          bars.push( {
                  dataKey: values[1+i].string_,
		  fill:    values[N+1+i].string_,
	  });

    }
    //console.log("bars", bars);


    let start = N*2;
    let data = [];
    for ( let i = start; i< values.length; i += N) {
          //console.log(values[i]);
	/*
          data.push( {
                  date: values[i].string_,
                  pv: values[i+1].number_,
                  uv: values[i+2].number_,
	  });
*/
          let dict = {};
	  dict[key] = values[i].string_;
	  for( let b = 0; b< bars.length; b++) {
               //console.log(bars[b].dataKey);
               dict[bars[b].dataKey] = values[i+b+1].number_;
	  }
	  data.push(dict);
           
    }
    //console.log(data);
    let result = {
	    key: key,
	    bars: bars,
	    data: data,
    };
    return result;

  }
}
