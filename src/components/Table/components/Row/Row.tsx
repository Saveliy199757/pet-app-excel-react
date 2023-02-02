import React, { useRef, useState } from "react";
import RowResizer from "./RowResizer";

interface IProps {
  children: React.ReactNode;
  number?: number;
}

const Row = ({ children, number }: IProps) => {
  const [rowHeight, setRowHeight] = useState<number>(0);
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
      style={{ height: rowHeight }}
    >
      <div className="row-info unselectable">
        {number ? number : ""}
        {number ? (
          <RowResizer
            setRowHeight={setRowHeight}
            rowBottom={rowBottom}
            rowHeight={rowHeight}
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
