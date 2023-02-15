import React, { useCallback, useEffect, useRef } from "react";
import {
  DEFAULT_HEIGHT_ROW,
  defaultRowsCount,
} from "../../constans/table.constans";
import Row from "./components/Row";
import Coll from "./components/Coll";
import Cell from "./components/Cell";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getByIdActiveCell } from "../../helpers/activeCellPosition";
import { transformActiveCellInObj } from "../../helpers/transformActiveCellnObj";
import { useActions } from "../../hooks/useActions";
import { nextCell } from "../../helpers/nextCell";

interface IProps {
  rowsCount?: number;
}

const Table = ({ rowsCount = defaultRowsCount }: IProps) => {
  const elementRef = useRef(null);
  const { rows, colls, activeCell } = useTypedSelector(
    (state) => state.excelTable
  );
  const { selectCell } = useActions();
  const handleOnKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { rowId, cellId } = transformActiveCellInObj(activeCell);
      const result = nextCell(event.key, Number(rowId), Number(cellId));
      selectCell(result.cellId, result.rowId);
    },
    [activeCell]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleOnKeyPress);
    return () => {
      document.removeEventListener("keydown", handleOnKeyPress);
    };
  }, [activeCell]);

  return (
    <div ref={elementRef} className="excel__table">
      <Row height={DEFAULT_HEIGHT_ROW}>
        {colls.map((coll, index) => (
          <Coll key={coll.id} index={coll.id} width={coll.width}>
            {coll.content}
          </Coll>
        ))}
      </Row>
      {rows.map((row, rowId) => {
        rowId = rowId + 1;
        const cellResult = row.cells.map((cell) => (
          <Cell
            key={cell.id}
            rowId={rowId}
            isSelect={getByIdActiveCell(rowId, cell.id) === activeCell}
            {...cell}
          />
        ));
        return (
          <Row key={row.id} number={row.id} height={row.height}>
            {cellResult}
          </Row>
        );
      })}
    </div>
  );
};

export default Table;
