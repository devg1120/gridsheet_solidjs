import { FC, CSSProperties } from "react";

// propsの型
type PropsType = {
    isShowEditedOnly: boolean;
    setShowEditedOnly: () => void;
    style?: CSSProperties;
};

// 編集済みの行のみ表示するボタン
export const EditFilterButton: FC<PropsType> = ({ isShowEditedOnly, setShowEditedOnly, style }) => {
    return (
        <div style={style}>
            <button onClick={setShowEditedOnly}>{isShowEditedOnly ? "すべて表示" : "編集済みのみ表示"}</button>
        </div>
    );
};
