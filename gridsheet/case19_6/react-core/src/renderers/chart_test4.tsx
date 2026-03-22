import type { RenderProps } from "./core";

export const ChartTest4RendererMixin  = {
  array({ value, sync, table, point }: RenderProps<Array<string>>): any {
    return (
	    <div>
               {value.map((name, index) => (
	           <button>{name}</button>
               ))}
	    </div>
    );
  },
};
