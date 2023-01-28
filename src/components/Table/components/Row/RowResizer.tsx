import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DEFAULT_ROW_INFO_WIDTH } from "../../../../constans/table.constans";

interface IProps {
  setRowHeight: (h: number) => void;
  rowBottom: number;
}

const RowResizer = ({ setRowHeight, rowBottom }: IProps) => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [bottom, setBottom] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);
  return (
    <div
      className="row-resize"
      data-resize="row"
      ref={ref}
      style={{ opacity: opacity, right: width + "px", bottom: bottom + "px" }}
      onMouseDown={() => {
        setIsMouseDown(true);
        setWidth(-5000);
        setOpacity(1);
      }}
      onMouseUp={() => {
        setWidth(DEFAULT_ROW_INFO_WIDTH - 1);
        setIsMouseDown(false);
        setOpacity(0);
      }}
      onPointerMove={(event) => {
        if (isMouseDown) {
          const delta = event.clientY - rowBottom;
          console.log({
            delta,
            bottom: rowBottom,
            clientY: event.clientY,
          });
          setBottom(-delta);
        }
      }}
    ></div>
  );
};

export default RowResizer;
