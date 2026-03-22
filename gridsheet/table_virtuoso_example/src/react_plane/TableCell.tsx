import { FC, ChangeEvent } from "react";
import { RandomData } from "../util";
import { HandleUpdateArgs } from "./Table";

// セルコンポーネントのpropsの型
type TableCellProps = {
    keyName: string; // カラム名
    rowData: RandomData; // 行データ
    rowIdx: number; // 行インデックス
    handleUpdate: ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => void; // セル編集時に実行されるハンドラ
    initialData: RandomData[]; // data取得直後のデータ
};

// セルコンポーネント
export const TableCell: FC<TableCellProps> = ({ keyName, rowData, rowIdx, handleUpdate, initialData }) => {
    // console.log("td!!"); // レンダリング確認用

    // セルの値取得
    const value = rowData[keyName];
    const initialValue = initialData[rowIdx]?.[keyName] ?? "";

    // セル編集時イベント
    const handleCange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = typeof value === "boolean" ? e.target.checked : e.target.value;
        handleUpdate({ rowIdx, keyName, newValue });
    };

    // 初期値と現在値が異なる場合は背景色をピンクに設定
    const cellStyle = initialValue !== value ? { backgroundColor: "pink" } : {};

    return (
        <td style={cellStyle}>
            {typeof value === "boolean" ?
                <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={handleCange}
                />
            :   <input
                    type="text"
                    value={value as string}
                    onChange={handleCange}
                />
            }
        </td>
    );
};
