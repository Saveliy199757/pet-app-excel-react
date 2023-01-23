import React from 'react';

interface IProps {
    children: React.ReactNode,
    index: number,
    width: number
}

const Coll = ({ children, index, width }: IProps) => {
    return (
        <div className="column unselectable" data-type="resizeble" data-key={index} style={{width: width}}>
             {children}
            <div className="col-resize" data-resize="col"></div>
        </div>
    );
};

export default Coll;