import React from 'react';

interface IProps {
    children: React.ReactNode;
}

const Cell = ({ children }: IProps) => {
    const index = 1
    const width = 2
    return (
        <div className="column unselectable" data-type="resizeble" data-key={index} style={{width: width}}>
            ${children}
            <div className="col-resize" data-resize="col"></div>
        </div>
    );
};

export default Cell;