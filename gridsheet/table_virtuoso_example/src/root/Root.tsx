import { useState, useEffect, CSSProperties } from "react";
import { ReactPlane } from "../react_plane/ReactPlane";
import { ReactVirtuoso } from "../react_virtuoso/ReactVirtuoso";

// ページタイプ
type PageType = "Menu" | "ReactPlane" | "ReactVirtuoso";

// liのスタイル定義
const clickableStyle: CSSProperties = {
    textAlign: "left",
    cursor: "pointer",
    textDecoration: "underline",
};

// メニューコンポーネント
const Menu = ({ setPage }: { setPage: (page: PageType) => void }) => {
    return (
        <>
            <div>るーとぺーじ</div>
            <ul>
                <li
                    style={clickableStyle}
                    onClick={() => setPage("ReactPlane")}
                >
                    プレーンなreactでのテーブル実装例（仮想スクロールライブラリ不使用）
                </li>
                <li
                    style={clickableStyle}
                    onClick={() => setPage("ReactVirtuoso")}
                >
                    rect-virtuoso 実装例
                </li>
            </ul>
        </>
    );
};

export const Root = () => {
    const [page, setPage] = useState<PageType>("Menu");

    // 戻るボタン押下イベント上書き
    useEffect(() => {
        window.history.pushState({ page }, "", page);

        const handlePopState = (event: PopStateEvent) => {
            if (event.state?.page) setPage(event.state.page);
        };

        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, [page]);

    if (page === "Menu") {
        return <Menu setPage={setPage} />;
    } else if (page === "ReactPlane") {
        return <ReactPlane />;
    } else if (page === "ReactVirtuoso") {
        return <ReactVirtuoso />;
    }
};
