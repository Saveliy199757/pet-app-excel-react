import React from 'react';
import RowResizer from "./RowResizer";

interface IProps {
    children: React.ReactNode,
    number?: number,
    height: number
}

const Row = ({ children, number, height  }: IProps) => {
    return (
        <div className="row" data-type="resizeble" data-key={number} style={{ height: height }}>
            <div className="row-info unselectable">
                {number ? number : ""}
                {number ? <RowResizer /> : ""}
            </div>
            <div className="row-data">{children}</div>
        </div>
    );
};

export default Row;