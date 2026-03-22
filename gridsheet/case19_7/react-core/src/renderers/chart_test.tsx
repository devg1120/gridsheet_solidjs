import type { RenderProps } from "./core";

export const ChartTestRendererMixin = {
  //string({ value, cell }): any {
  string({ value, cell }: RenderProps<string>): any {

    return `----${value}----`;
  },
};

