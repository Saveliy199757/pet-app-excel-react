import React from "react";
import { DEFAULT_WIDTH_CELL } from "../../../../constans/table.constans";

interface IProps {
  children: React.ReactNode;
}

const Cell = ({ children }: IProps) => {
  return (
    <div
      className="cell"
      contentEditable
      data-key="${col}"
      data-type="cell"
      data-id="${id}"
      data-value="${content || ''}"
      style={{ width: DEFAULT_WIDTH_CELL }}
      //style="${styles}; width: ${width}"
    >
      {children || ""}
    </div>
  );
};

export default Cell;
