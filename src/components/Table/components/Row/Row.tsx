import React, { useRef, useState } from "react";
import Resizer from "../Resizer";

interface IProps {
  children: React.ReactNode;
  number?: number;
  height: number;
}

const Row = ({ children, number, height }: IProps) => {
  const [rowHeight, setRowHeight] = useState<number>(height);
  const [rowBottom, setRowBottom] = useState<number>(0);
  const refRow = useRef<any>(null);

  return (
    <div
      ref={refRow}
      className="row"
      data-key={number}
      onMouseDown={() => {
        if (refRow.current) {
          setRowBottom(
            Math.round(refRow.current.getBoundingClientRect().bottom)
          );
          setRowHeight(
            Math.round(refRow.current.getBoundingClientRect().height)
          );
        }
      }}
      style={{ height: height }}
    >
      <div className="row-info unselectable">
        {number ? number : ""}
        {number ? (
          <Resizer
            id={number}
            isResizeRow={true}
            bottom={rowBottom}
            height={rowHeight}
          />
        ) : (
          ""
        )}
      </div>
      <div className="row-data">{children}</div>
    </div>
  );
};

export default Row;
