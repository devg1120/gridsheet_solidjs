import { useState, useEffect, FC } from "react";
import { RandomData, createRandomData } from "../util";
import { TableVirtuoso } from "react-virtuoso";
import { TableCell } from "./TableCell";
import "../style.css";

// テーブルコンポーネントのpropsの型
type PropsType = {
    row: number; // 行数
    col: number; // 列数
    isShowEditedOnly: boolean; // trueなら編集済みの行のみ表示
};

// HandleUpdateの引数の型
export type HandleUpdateArgs = {
    rowIdx: number;
    keyName: string;
    newValue: string | boolean;
};

// テーブルコンポーネント
export const Table: FC<PropsType> = ({ row, col, isShowEditedOnly }) => {
    const [currentData, setCurrentData] = useState<RandomData[]>([]);
    const [initialData, setInitialData] = useState<RandomData[]>([]);

    // コンポーネントマウント時データ初期化
    useEffect(() => {
        const data = createRandomData(row, col);
        setCurrentData(data);
        setInitialData(data);
    }, []);

    // データ更新ハンドラ
    const handleUpdate = ({ rowIdx, keyName, newValue }: HandleUpdateArgs) => {
        const updatedData = [...currentData];
        updatedData[rowIdx] = { ...updatedData[rowIdx], [keyName]: newValue };
        setCurrentData(updatedData);
    };

    // 編集済みの行を判断する関数
    const isRowEdited = (row: RandomData, initialRow: RandomData) => {
        return Object.keys(row).some((key) => row[key] !== initialRow[key]);
    };

    // 表示するデータのフィルタリング
    const filteredData =
        isShowEditedOnly ? currentData.filter((row, idx) => isRowEdited(row, initialData[idx])) : currentData;

    // ヘッダ部コンポーネント
    const fixedHeaderContent = () => {
        // memo: currentDataはクロージャでアクセス
        // prettier-ignore
        return (
            <tr>
                {currentData.length > 0 && Object.keys(currentData[0]).map((key, index) =>
                    <th key={index}>{key}</th>
                )}
            </tr>
        )
    };

    // ボディ部コンポーネント
    const itemContent = (_: number, rowData: RandomData) => {
        // フィルタリングされたデータセット内の実際の行インデックスを取得
        const realIdx = currentData.findIndex((row) => row === rowData);

        return (
            <>
                {Object.keys(rowData).map((key) => (
                    <TableCell
                        key={key}
                        rowData={rowData}
                        rowIdx={realIdx}
                        keyName={key}
                        handleUpdate={handleUpdate} // memo: クロージャでアクセス
                        initialData={initialData} // memo: クロージャでアクセス
                    />
                ))}
            </>
        );
    };

    return (
        <div style={{ height: "90vh", width: "70vh" }}>
            <TableVirtuoso
                data={filteredData}
                totalCount={filteredData.length}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={itemContent}
            ></TableVirtuoso>
        </div>
    );
};
