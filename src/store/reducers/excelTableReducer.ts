import {
  ExcelTable,
  ExcelTableAction,
  ExcelTableActionTypes,
} from "../../types/excelTable";
import { initRow } from "../../helpers/initRow";
import { initColl } from "../../helpers/initColl";

const initialState: ExcelTable = {
  rows: initRow(15),
  colls: initColl(),
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
    case ExcelTableActionTypes.FETCH_EXCEL_TABLE_DATA:
      return { ...state };
    default:
      return state;
  }
};
