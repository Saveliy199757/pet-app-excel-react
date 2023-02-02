import React, { useRef, useState } from "react";
import CollResizer from "./CollResizer";
import { DEFAULT_WIDTH_CELL } from "../../../../constans/table.constans";

interface IProps {
  children: React.ReactNode;
  index: number;
  width: number;
}

const Coll = ({ children, index, width }: IProps) => {
  const [collRight, setCollRight] = useState(0);
  const [collWidth, setCollWidth] = useState(DEFAULT_WIDTH_CELL);
  const refColl = useRef<any>(null);
  return (
    <div
      className="column unselectable"
      data-type="resizeble"
      data-key={index}
      style={{ width: collWidth }}
    >
      {children}
      <CollResizer
        setCollWidth={setCollWidth}
        collRight={collRight}
        collWidth={collWidth}
      />
    </div>
  );
};

export default Coll;
