import React from "react";
import { DEFAULT_WIDTH_CELL } from "../../../../constans/table.constans";

interface IProps {
  children?: React.ReactNode;
  width: number;
}

const Cell = ({ children, width }: IProps) => {
  return (
    <div
      className="cell"
      style={{ width }}
      contentEditable
      data-key="${col}"
      data-type="cell"
      data-id="${id}"
      data-value="${content || ''}"
      //style="${styles}; width: ${width}"
    >
      {children || ""}
    </div>
  );
};

export default Cell;
