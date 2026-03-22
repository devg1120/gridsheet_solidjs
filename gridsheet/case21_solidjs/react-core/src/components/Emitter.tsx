import type { FC } from "solid-js";
import { useContext, createEffect, useRef } from "solid-js";
import { Context } from "../store";

export const Emitter: FC = () => {
  const { store } = useContext(Context);
  const { choosing: pointing, selectingZone: zone, tableReactive } = store;
  const table = tableReactive.current;

  createEffect(() => {
    if (table?.isInitialized && table.wire.onChange) {
      table.wire.onChange({
        table,
        points: {
          pointing,
          selectingFrom: { y: zone.startY, x: zone.startX },
          selectingTo: { y: zone.endY, x: zone.endX },
        },
      });
    }
  }, [tableReactive]);

  createEffect(() => {
    if (table && table.wire.onSelect) {
      table.wire.onSelect({
        table,
        points: {
          pointing,
          selectingFrom: { y: zone.startY, x: zone.startX },
          selectingTo: { y: zone.endY, x: zone.endX },
        },
      });
    }
  }, [pointing, zone]);
  return null;
};
