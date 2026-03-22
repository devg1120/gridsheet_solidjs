import type { CSSProperties, FC, ReactNode } from "solid-js";
import { useBrowser } from "./hooks";
import { createPortal } from "react-dom";

type Props = {
  class?: string;
  style?: CSSProperties;
  children: ReactNode;
  [attr: string]: any;
};

export const Fixed: FC<Props> = ({
  children,
  style,
  class = "",
  ...attrs
}) => {
  const { document } = useBrowser();
  if (document == null) {
    return null;
  }
  return createPortal(
    <div {...attrs} class={`gs-fixed ${class}`} style={style}>
      {children}
    </div>,
    document.body,
  );
};
