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

export const setCellsWidth = (id: number, width: number): ExcelTableAction => {
  return {
    type: ExcelTableActionTypes.CHANGE_COLLS_WIDTH,
    payload: { id, width },
  };
};

export const selectCell = (id: number, rowId: number): ExcelTableAction => {
  return {
    type: ExcelTableActionTypes.SELECT_CELL,
    payload: { id, rowId },
  };
};

export const setTextCell = (text: string, rowId: number, cellId: number) => {
  return {
    type: ExcelTableActionTypes.SET_TEXT_CELL,
    payload: {
      text,
      rowId,
      cellId,
    },
  };
};

export const fetchExcelTableData = (): ExcelTableAction => {
  return {
    type: ExcelTableActionTypes.FETCH_EXCEL_TABLE_DATA,
  };
};
