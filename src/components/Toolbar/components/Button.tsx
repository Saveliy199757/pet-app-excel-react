import React from 'react';
import {IButtons} from "../Toolbar";

const Button = ({ active, value, icon }: IButtons) => {
    const meta = `
    data-type="button"
    data-value='${JSON.stringify(value)}'
  `
    return (
        <div
            className={"button" + active ? 'active' : ''}
            data-type="button"
            data-value={JSON.stringify(value)}
        >
            <i
                className="material-icons"
                data-type="button"
                data-value={JSON.stringify(value)}
            >${icon}</i>
        </div>
    );
};

export default Button;