import React from 'react';

const Row = () => {
     const content = "123"
     const number = 1
     const height = 12
    return (
        <div className="row" data-type="resizeble" data-key={number} style={{ height: height }}>
            <div className="row-info unselectable">
                ${number}
                <div className="row-resize" data-resize="row"></div>
            </div>
            <div className="row-data">${content}</div>
        </div>
    );
};

export default Row;