import type { RenderProps } from "./core";

export const ChartTestRendererMixin: RendererMixinType = {
  string({ value, cell }): any {
    return `----${value}----`;
  },
};

