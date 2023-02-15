import { defaultRowsCount } from "../constans/table.constans";

export const nextCell = (keyType: string, rowId: number, cellId: number) => {
  const MIN_VALUE = 1;
  const MAX_VALUE = defaultRowsCount - 1;
  switch (keyType) {
    case "Enter":
    case "ArrowDown":
      rowId = rowId + 1 > MAX_VALUE ? MAX_VALUE : rowId + 1;
      break;
    case "Tab":
      break;
    case "ArrowUp":
      rowId = rowId - 1 < MIN_VALUE ? MIN_VALUE : rowId - 1;
      break;
    case "ArrowRight":
      cellId++;
      break;
    case "ArrowLeft":
      cellId = cellId - 1 < MIN_VALUE ? MIN_VALUE : cellId - 1;
      break;
  }
  return { rowId, cellId };
};
