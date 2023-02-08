import React, { useMemo } from "react";
import {
  CODE,
  DEFAULT_WIDTH_CELL,
  defaultRowsCount,
} from "../../constans/table.constans";
import Row from "./components/Row";
import Coll from "./components/Coll";
import Cell from "./components/Cell";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface IProps {
  rowsCount?: number;
}

function toChar(el?: any, index?: any) {
  return String.fromCharCode(CODE.A + index);
}

const Table = ({ rowsCount = defaultRowsCount }: IProps) => {
  const colsCount = useMemo(() => CODE.Z - CODE.A + 1, []);
  const cols = useMemo(
    () => new Array(colsCount).fill("").map(toChar),
    [colsCount]
  );
  const cell = useMemo(() => new Array(colsCount).fill(""), [colsCount]);
  //const rows = useMemo(() => new Array(rowsCount - 1).fill(""), [rowsCount]);
  const { rows } = useTypedSelector((state) => state.excelTable);

  return (
    <div className="excel__table">
      <Row>
        {cols.map((contentColl, index) => (
          <Coll key={index} index={index} width={DEFAULT_WIDTH_CELL}>
            {contentColl}
          </Coll>
        ))}
      </Row>
      {rows.map((row, rowIndex) => {
        const cellResult = row.cells.map((cell, index) => (
          <Cell key={cell.id} width={cell.width}></Cell>
        ));
        return (
          <Row key={row.id} number={row.id}>
            {cellResult}
          </Row>
        );
      })}
    </div>
  );
};

export default Table;
