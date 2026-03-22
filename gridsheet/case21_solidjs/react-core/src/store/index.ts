import { createContext } from "solid-js";
import type { StoreType } from "../types";

export type Dispatcher = React.Dispatch<{
  type: number;
  value: any;
}>;

export const Context = createContext(
  {} as {
    store: StoreType;
    dispatch: Dispatcher;
  },
);
