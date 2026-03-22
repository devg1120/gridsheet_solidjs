// JSONオブジェクトの型定義
export interface RandomData {
    [key: string]: string | boolean;
}

// ランダムなデータを生成する関数
export const createRandomData = (elementCount: number, checkCount: number): RandomData[] => {
    return Array.from({ length: elementCount }, () => {
        const data: RandomData = { name: randomString() };
        for (let i = 1; i <= checkCount; i++) {
            data[`check${i}`] = randomBoolean();
        }
        return data;
    });
};

// ランダムな文字列を生成する関数
const randomString = (): string => {
    const length = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// ランダムなブール値を生成する関数
const randomBoolean = (): boolean => {
    return Math.random() > 0.5;
};
