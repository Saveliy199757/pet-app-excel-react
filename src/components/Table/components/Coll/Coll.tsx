import React, { useRef, useState } from "react";
import CollResizer from "./CollResizer";

interface IProps {
  children: React.ReactNode;
  index: number;
  width: number;
}

const Coll = ({ children, index, width }: IProps) => {
  const [collRight, setCollRight] = useState(0);
  const [collWidth, setCollWidth] = useState(width);
  const refColl = useRef<any>(null);
  return (
    <div
      ref={refColl}
      className="column unselectable"
      data-type="resizeble"
      data-key={index}
      style={{ width: collWidth }}
      onMouseDown={() => {
        if (refColl.current) {
          setCollRight(
            Math.round(refColl.current.getBoundingClientRect().right)
          );
          setCollWidth(
            Math.round(refColl.current.getBoundingClientRect().width)
          );
        }
      }}
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
