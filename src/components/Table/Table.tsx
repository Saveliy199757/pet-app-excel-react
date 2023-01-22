import React from 'react';
import {CODE, defaultRowsCount} from "../../constans/table.constans";
import Row from "./components/Row";

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
    const rows = new Array(colsCount).fill('')
    return (
        <div>
            {/*
                rows.map((row, index) =>
                <Row number={} height={} />

                <Row>
                )
            */}
        </div>
    );
};

export default Table;