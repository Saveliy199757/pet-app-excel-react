import {
  ExcelTable,
  ExcelTableAction,
  ExcelTableActionTypes,
} from "../../types/excelTable";
import { initRow } from "../../helpers/initRow";

const initialState: ExcelTable = {
  rows: initRow(15),
};

console.log(initialState.rows);

export const excelTableReducer = (
  state = initialState,
  action: ExcelTableAction
): ExcelTable => {
  switch (action.type) {
    case ExcelTableActionTypes.CHANGE_ROW_HEIGHT:
      return {
        rows: state.rows.map((row, index) => {
          if (action.payload.id === index) {
            return {
              ...row,
              height: action.payload.height,
            };
          }
          return { ...row };
        }),
      };
    default:
      return state;
  }
};
