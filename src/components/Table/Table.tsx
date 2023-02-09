import React, { useEffect, useMemo } from "react";
import {
  CODE,
  DEFAULT_HEIGHT_ROW,
  DEFAULT_WIDTH_CELL,
  defaultRowsCount,
} from "../../constans/table.constans";
import Row from "./components/Row";
import Coll from "./components/Coll";
import Cell from "./components/Cell";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IProps {
  rowsCount?: number;
}

const Table = ({ rowsCount = defaultRowsCount }: IProps) => {
  const { rows, colls } = useTypedSelector((state) => state.excelTable);

  return (
    <div className="excel__table">
      <Row height={DEFAULT_HEIGHT_ROW}>
        {colls.map((coll, index) => (
          <Coll key={coll.id} index={coll.id} width={coll.width}>
            {coll.content}
          </Coll>
        ))}
      </Row>
      {rows.map((row) => {
        const cellResult = row.cells.map((cell, index) => (
          <Cell key={cell.id} width={cell.width}></Cell>
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
