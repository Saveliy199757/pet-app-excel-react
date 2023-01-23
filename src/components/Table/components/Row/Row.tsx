import React from 'react';

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
                <div className="row-resize" data-resize="row"></div>
            </div>
            <div className="row-data">{children}</div>
        </div>
    );
};

export default Row;