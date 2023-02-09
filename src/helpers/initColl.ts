import { CODE, DEFAULT_WIDTH_CELL } from "../constans/table.constans";
import { Coll } from "../types/excelTable";

const colsCount = CODE.Z - CODE.A + 1;

function toChar(index: number) {
  return String.fromCharCode(CODE.A + index);
}

export const initColl = (): Coll[] => {
  return new Array(colsCount).fill("").map((coll, index) => {
    return {
      id: index + 1,
      width: DEFAULT_WIDTH_CELL,
      content: toChar(index),
    };
  });
};
