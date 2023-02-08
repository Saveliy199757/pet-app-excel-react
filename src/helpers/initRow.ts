import { Row } from "../types/excelTable";
import { DEFAULT_HEIGHT_ROW } from "../constans/table.constans";
import { initCell } from "./initCell";

export const initRow = (count: number): Row[] => {
  return new Array(count - 1).fill("").map((row, i) => {
    return {
      id: i + 1,
      height: DEFAULT_HEIGHT_ROW,
      cells: initCell(),
    };
  });
};
