import React, {useState} from "react";
import {DEFAULT_ROW_INFO_WIDTH} from "../../../../constans/table.constans";

const RowResizer = () => {
    const [width, setWidth] = useState<number | string>()
    return (
        <div
            className="row-resize"
            data-resize="row"
            style={{width: width + "px"}}
            onMouseDown={() => setWidth(5000) }
            onMouseUp={() => setWidth(DEFAULT_ROW_INFO_WIDTH - 1)}
        >
        </div>
    );
};

export default RowResizer;