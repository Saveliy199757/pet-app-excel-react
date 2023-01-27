import React, { useRef, useState } from "react";
import { DEFAULT_ROW_INFO_WIDTH } from "../../../../constans/table.constans";

interface IProps {
  setRowHeight: (h: number) => void;
}

const RowResizer = ({ setRowHeight }: IProps) => {
  const ref = useRef(null);
  const [width, setWidth] = useState<number>();
  const [position, setPosition] = useState({
    y: 50,
    coords: {} as any,
  });
  const handleMouseMove = (e: any) => {
    setPosition((position) => {
      const yDiff = position.coords?.y - e.pageY;
      return {
        y: position.y - yDiff,
        coords: {
          y: e.pageY,
        },
      };
    });
  };
  const getRec = () => {
    const element = ref.current;
    console.log();
  };
  return (
    <div
      className="row-resize"
      data-resize="row"
      ref={ref}
      style={{ width: width + "px" }}
      onMouseDown={() => setRowHeight(100)}
      onMouseUp={() => setWidth(DEFAULT_ROW_INFO_WIDTH - 1)}
      onMouseMove={(event) => console.log()}
    ></div>
  );
};

export default RowResizer;
