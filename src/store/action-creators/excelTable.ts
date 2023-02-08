import {
  ExcelTableAction,
  ExcelTableActionTypes,
} from "../../types/excelTable";

export const setRowHeight = (id: number, height: number): ExcelTableAction => {
  return {
    type: ExcelTableActionTypes.CHANGE_ROW_HEIGHT,
    payload: { id, height },
  };
};
