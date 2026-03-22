import { solveTable } from "../solver";
import { Table } from "../../lib/table";
import { BaseFunction } from "./__base";
//import { ensureNumber } from "./__utils";
import { ensureAny, AnyType, AnyValue  } from "./__utils";
import { FormulaError } from "../evaluator";

type Dict = {
	key: string;
	value: number;
}

export class ArrayDictFunction extends BaseFunction {
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
  protected main(...values: Dict[]) {
    if (values.length === 0) {
      return [];
    }

    
    let values2by = [];
    for ( let i = 0; i< values.length; ) {
           values2by.push([ values[i] , values[i+1]]);
           i++;
           i++;
    }

    let result = [];

    for ( let i = 0; i< values2by.length; i++) {
          result.push(
               {
                  key:   values2by[i][0].string_,
                  value: values2by[i][1].number_,
	       }
           )
    }

    return result;

/*
    return [
             { key: values[0].string_, value: values[1].number_},
             { key: values[2].string_, value: values[3].number_},
             { key: values[4].string_, value: values[5].number_},
             { key: values[6].string_, value: values[7].number_},
          ]
  */

  }
}
