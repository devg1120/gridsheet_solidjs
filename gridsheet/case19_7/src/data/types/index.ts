export type StudyData = {
  date: string;
  問題数: number;
  正解数: number;
  正解率: number;
};

export type BarData = {
   name: string;
   contract: number;
   cancellation: number;
};

export type BarMultiData = {
    date: string;
    uv: number;
    pv: number;
    amt: number;
};

export type PieData = {
   name: string;
   students: number;
};

export type RadarData = {
    subject: string,
    A: number,
    B: number,
    fullMark: number
};

