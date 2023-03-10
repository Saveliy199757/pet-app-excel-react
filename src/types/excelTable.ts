export interface Cell {
  id: number;
  width: number;
  textContent: string;
}
export interface Row {
  id: number;
  height: number;
  cells: Cell[];
}
export interface Coll {
  id: number;
  width: number;
  content: string;
}
export interface ExcelTable {
  rows: Row[];
  colls: Coll[];
  activeCell: string;
}
export enum ExcelTableActionTypes {
  CHANGE_ROW_HEIGHT = "CHANGE_ROW_HEIGHT",
  CHANGE_COLLS_WIDTH = "CHANGE_COLLS_WIDTH",
  SELECT_CELL = "SELECT_CELL",
  SET_TEXT_CELL = "SET_TEXT_CELL",
  FETCH_EXCEL_TABLE_DATA = "FETCH_EXCEL_TABLE_DATA",
}
interface ChangeRowHeightAction {
  type: ExcelTableActionTypes.CHANGE_ROW_HEIGHT;
  payload: {
    id: number;
    height: number;
  };
}
interface ChangeCollsWidthAction {
  type: ExcelTableActionTypes.CHANGE_COLLS_WIDTH;
  payload: {
    id: number;
    width: number;
  };
}

interface SelectCell {
  type: ExcelTableActionTypes.SELECT_CELL;
  payload: {
    id: number;
    rowId: number;
  };
}

interface SetTextCell {
  type: ExcelTableActionTypes.SET_TEXT_CELL;
  payload: {
    cellId: number;
    rowId: number;
    textContent: string;
  };
}

interface FetchExcelTableData {
  type: ExcelTableActionTypes.FETCH_EXCEL_TABLE_DATA;
}
export type ExcelTableAction =
  | ChangeRowHeightAction
  | ChangeCollsWidthAction
  | FetchExcelTableData
  | SelectCell
  | SetTextCell;
