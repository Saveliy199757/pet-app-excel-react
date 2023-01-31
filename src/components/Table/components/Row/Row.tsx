import React, { useEffect, useRef, useState } from "react";
import RowResizer from "./RowResizer";

interface IProps {
  children: React.ReactNode;
  number?: number;
  height: number;
}

const Row = ({ children, number, height }: IProps) => {
  const [rowHeight, setRowHeight] = useState(0);
  const refRow = useRef<any>(null);
  const [rowBottom, setRowBottom] = useState(0);

  useEffect(() => {
    if (refRow.current) {
      setRowBottom(Math.round(refRow.current.getBoundingClientRect().bottom));
      setRowHeight(Math.round(refRow.current.getBoundingClientRect().height));
    }
  }, [rowHeight, rowBottom]);

  return (
    <div
      ref={refRow}
      className="row"
      data-type="resizeble"
      data-key={number}
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
