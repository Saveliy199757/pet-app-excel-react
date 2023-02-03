import React, { useMemo } from "react";
import {
  CODE,
  DEFAULT_WIDTH_CELL,
  defaultRowsCount,
} from "../../constans/table.constans";
import Row from "./components/Row";
import Coll from "./components/Coll";
import Cell from "./components/Cell";

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
  const rows = useMemo(() => new Array(rowsCount - 1).fill(""), [rowsCount]);
  const cell = useMemo(() => new Array(colsCount).fill(""), [colsCount]);

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
        const cellResult = cell.map((_, index) => (
          <Cell key={index}>{row}</Cell>
        ));
        return (
          <Row key={rowIndex} number={rowIndex + 1}>
            {cellResult}
          </Row>
        );
      })}
    </div>
  );
};

export default Table;
