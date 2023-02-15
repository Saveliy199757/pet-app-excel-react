import {
  ExcelTable,
  ExcelTableAction,
  ExcelTableActionTypes,
} from "../../types/excelTable";
import { initRow } from "../../helpers/initRow";
import { initColl } from "../../helpers/initColl";
import { getByIdActiveCell } from "../../helpers/activeCellPosition";

const initialState: ExcelTable = {
  rows: initRow(15),
  colls: initColl(),
  activeCell: "1:1",
};

console.log(initialState);

export const excelTableReducer = (
  state = initialState,
  action: ExcelTableAction
): ExcelTable => {
  switch (action.type) {
    case ExcelTableActionTypes.CHANGE_ROW_HEIGHT:
      return {
        ...state,
        rows: state.rows.map((row) => {
          if (action.payload.id === row.id) {
            return {
              ...row,
              height: action.payload.height,
            };
          }
          return row;
        }),
      };
    case ExcelTableActionTypes.CHANGE_COLLS_WIDTH:
      return {
        ...state,
        colls: state.colls.map((coll) => {
          if (coll.id === action.payload.id) {
            return {
              ...coll,
              width: action.payload.width,
            };
          }
          return coll;
        }),
        rows: state.rows.map((row) => {
          return {
            ...row,
            cells: row.cells.map((cell) => {
              if (cell.id === action.payload.id) {
                return {
                  ...cell,
                  width: action.payload.width,
                };
              }
              return cell;
            }),
          };
        }),
      };
    case ExcelTableActionTypes.SELECT_CELL:
      return {
        ...state,
        activeCell: getByIdActiveCell(action.payload.rowId, action.payload.id),
      };
    case ExcelTableActionTypes.SET_TEXT_CELL:
      return {
        ...state,
        rows: state.rows.map((row) => {
          if (row.id === action.payload.rowId) {
            return {
              ...row,
              cells: row.cells.map((cell) => {
                if (cell.id === action.payload.cellId) {
                  return {
                    ...cell,
                    textContent: action.payload.textContent,
                  };
                }
                return cell;
              }),
            };
          }
          return row;
        }),
      };
    case ExcelTableActionTypes.FETCH_EXCEL_TABLE_DATA:
      return { ...state };
    default:
      return state;
  }
};
