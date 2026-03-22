import { useState } from "react";
import { Table } from "./Table";
import { globalData } from "../globalData";
import { CellCounter } from "../component/CellCounter";
import { EditFilterButton } from "./EditFilterButton";

const comment = "react-virtuoso";

export const ReactPlane = () => {
    // テーブルの行数、列数
    const { row, col } = globalData;

    // 編集済み行のみ表示する/しないの状態
    const [isShowEditedOnly, setShowEditedOnly] = useState(false);

    // isShowEditedOnlyをトグルする関数
    const toggleShowEditedOnly = () => {
        setShowEditedOnly(!isShowEditedOnly);
    };

    return (
        <>
            <div>{comment}</div>
            <div>
                <CellCounter
                    row={row}
                    col={col}
                    style={{ display: "inline-block", width: "50%" }}
                />
                <EditFilterButton
                    isShowEditedOnly={isShowEditedOnly}
                    setShowEditedOnly={toggleShowEditedOnly}
                    style={{ display: "inline-block", width: "50%" }}
                />
            </div>
            <Table
                row={row}
                col={col}
                isShowEditedOnly={isShowEditedOnly}
            />
        </>
    );
};
