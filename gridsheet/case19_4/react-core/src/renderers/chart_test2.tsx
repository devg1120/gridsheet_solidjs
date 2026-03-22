import type { RenderProps } from "./core";

export const ChartTest2RendererMixin: RendererMixinType = {
  string({ value, cell }): any {
    return `r2----${value}---`;
  },
};

