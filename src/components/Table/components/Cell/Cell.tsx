import React from "react";
import { useActions } from "../../../../hooks/useActions";

interface IProps {
  children?: React.ReactNode;
  id: number;
  rowId: number;
  width: number;
  isSelect: boolean;
}

const Cell = ({ children, id, rowId, width, isSelect }: IProps) => {
  const { selectCell } = useActions();
  return (
    <div
      className={isSelect ? "cell selected" : "cell"}
      style={{ width }}
      onClick={() => selectCell(id, rowId)}
      //contentEditable
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
