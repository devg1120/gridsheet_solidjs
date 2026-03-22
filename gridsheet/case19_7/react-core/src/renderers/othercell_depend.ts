import type { RendererMixinType } from "./core";
import type { RenderProps } from "./core";

export const OtherCellDependRendererMixin: RendererMixinType = {
  //array({ value, sync, table, point }: RenderProps<array>): any {
  string({ value, sync, table, point }: RenderProps<string>): any {
    if (value == null ) {
      return "null";
    }
/*
    if (value == null || isNaN(value)) {
      return "NaN";
    }
    */
    /*
    const [int, fraction] = String(value).split(".");
    const result = int.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    if (fraction == null) {
      return result;
    }
    return `${result}.${fraction}`;
    */
     return "DP"+ "[ " + value + " ]";
  },
};
