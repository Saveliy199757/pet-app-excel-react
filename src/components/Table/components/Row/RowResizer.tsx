import React, {useState} from "react";
import {DEFAULT_ROW_INFO_WIDTH} from "../../../../constans/table.constans";

const RowResizer = () => {
    const [width, setWidth] = useState<number>()
    const [position, setPosition] = useState({
        y: 50,
        coords: {} as any,
    });
    const handleMouseMove = (e: any) => {
        setPosition(position => {

            const yDiff = position.coords?.y - e.pageY;
            return {
                y: position.y - yDiff,
                coords: {
                    y: e.pageY,
                },
            };
        });
    }
    return (
        <div
            className="row-resize"
            data-resize="row"
            style={{width: width + "px"}}
            onMouseDown={() => setWidth(5000) }
            onMouseUp={() => setWidth(DEFAULT_ROW_INFO_WIDTH - 1)}
            onMouseMove={(event) => console.log({
                "button": event.button,
                "event": event
            })}
        >
        </div>
    );
};

export default RowResizer;