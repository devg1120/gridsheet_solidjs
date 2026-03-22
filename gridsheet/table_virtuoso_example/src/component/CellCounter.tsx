import { CSSProperties, FC } from "react";

type PropsType = {
    row: number;
    col: number;
    style?: CSSProperties;
};

export const CellCounter: FC<PropsType> = ({ row, col, style }) => {
    return (
        <div style={style}>
            <span>行数：{row}</span>
            <span>{"　　　"}</span>
            <span>列数：{col}</span>
            <span>{"　　　"}</span>
            <span>要素数：{row * col}</span>
        </div>
    );
};
