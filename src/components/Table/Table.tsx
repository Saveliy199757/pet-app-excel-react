import React from 'react';
import {CODE, DEFAULT_HEIGHT_ROW, DEFAULT_WIDTH_CELL, defaultRowsCount} from "../../constans/table.constans";
import Row from "./components/Row";
import Coll from "./components/Coll";
import Cell from "./components/Cell";

interface IProps {
    rowsCount?: number;
}

function toChar(el?: any, index?: any) {
    return String.fromCharCode(CODE.A + index)
}

const Table = ({ rowsCount = defaultRowsCount }: IProps) => {
    const colsCount = CODE.Z - CODE.A + 1;
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
    const rows = new Array(rowsCount - 1).fill('')
    const cell = new Array(colsCount).fill('')
    return (
        <div className="excel__table">
            <Row height={DEFAULT_HEIGHT_ROW}>
               {
                  cols.map((contentColl,index) => <Coll key={index} index={index} width={DEFAULT_WIDTH_CELL}>{contentColl}</Coll> )
               }
            </Row>
                {
                    rows.map((row, index) => {
                        const cellResult = cell.map((_, index) => <Cell key={index}>{row}</Cell> )
                        return <Row key={index} number={index + 1} height={DEFAULT_HEIGHT_ROW}>{cellResult}</Row>
                    })
                }
        </div>
    );
};

export default Table;