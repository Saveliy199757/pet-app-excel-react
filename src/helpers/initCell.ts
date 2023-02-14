import { CODE, DEFAULT_WIDTH_CELL } from "../constans/table.constans";
import { Cell } from "../types/excelTable";

const colsCount = CODE.Z - CODE.A + 1;
export const initCell = (): Cell[] => {
  return new Array(colsCount).fill("").map((cell, i) => {
    return {
      id: i + 1,
      width: DEFAULT_WIDTH_CELL,
      isSelect: false,
    };
  });
};
