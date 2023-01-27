import React, { useState } from "react";
import RowResizer from "./RowResizer";

interface IProps {
  children: React.ReactNode;
  number?: number;
  height: number;
}

const Row = ({ children, number, height }: IProps) => {
  const [rowHeight, setRowHeight] = useState(height);
  return (
    <div
      className="row"
      data-type="resizeble"
      data-key={number}
      style={{ height: rowHeight }}
    >
      <div className="row-info unselectable">
        {number ? number : ""}
        {number ? <RowResizer setRowHeight={setRowHeight} /> : ""}
      </div>
      <div className="row-data">{children}</div>
    </div>
  );
};

export default Row;
