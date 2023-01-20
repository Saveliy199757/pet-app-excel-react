import React from 'react';

interface IProps {
    children: React.ReactNode
}

const Cell = ( { children }: IProps) => {
    return (
        <div
            className="cell"
            contentEditable
            data-key="${col}"
            data-type="cell"
            data-id="${id}"
            data-value="${content || ''}"
            //style="${styles}; width: ${width}"
        >
            ${children || ''}
        </div>
    );
};

export default Cell;