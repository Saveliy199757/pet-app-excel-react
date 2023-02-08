export interface Cell {
  id: number;
  width: number;
}
export interface Row {
  id: number;
  height: number;
  cells: Cell[];
}
export interface ExcelTable {
  rows: Row[];
}
export enum ExcelTableActionTypes {
  CHANGE_ROW_HEIGHT = "CHANGE_ROW_HEIGHT",
  CHANGE_CELLS_WIDTH = "CHANGE_CELLS_WIDTH",
}
interface ChangeRowHeightAction {
  type: ExcelTableActionTypes.CHANGE_ROW_HEIGHT;
  payload: {
    id: number;
    height: number;
  };
}
interface ChangeCellsWidthAction {
  type: ExcelTableActionTypes.CHANGE_CELLS_WIDTH;
  payload: {
    ids: number[];
  };
}
export type ExcelTableAction = ChangeRowHeightAction | ChangeCellsWidthAction;
