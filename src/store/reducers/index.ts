import { combineReducers } from "redux";
import { excelTableReducer } from "./excelTableReducer";

export const rootReducer = combineReducers({
  excelTable: excelTableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
