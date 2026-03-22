import type { RenderProps } from "./core";

//export const ChartTest2RendererMixin: RendererMixinType = {
export const ChartTest2RendererMixin  = {
  string({ value, cell }: RenderProps<string>): any {
    return `r2----${value}---`;
  },
};

