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

export const fetchExcelTableData = (): ExcelTableAction => {
  return {
    type: ExcelTableActionTypes.FETCH_EXCEL_TABLE_DATA,
  };
};
