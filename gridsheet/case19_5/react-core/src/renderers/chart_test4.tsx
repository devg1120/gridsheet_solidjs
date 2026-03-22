import type { RenderProps } from "./core";
/*
export const ChartTest3RendererMixin: RendererMixinType = {
  string({ value, cell }): any {
    return `r3----${value}---`;
  },
};
*/

        //type="checkbox"

//export const ChartTest3RendererMixin: RendererMixinType = {
/*
export const ChartTest4RendererMixin  = {
  bool({ value, sync, table, point }: RenderProps<boolean>): any {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => {
          if (sync) {
            sync(
              table.write({ point, value: e.currentTarget.checked.toString() }),
            );
          }
          e.currentTarget.blur();
        }}
      />
    );
  },
};
*/
/*
export const ChartTest4RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<array>): any {
    return (
	    <div>
	      <button>{value[0]}</button>
	      <button>{value[1]}</button>
	      <button>{value[2]}</button>
	    </div>
    );
  },
};
*/

export const ChartTest4RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<array>): any {
    return (
	    <div>
               {value.map((name, index) => (
	           <button>{name}</button>
               ))}
	    </div>
    );
  },
};
