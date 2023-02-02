import React, { useState } from "react";

interface IProps {
  setCollWidth: (width: number) => void;
  collRight: number;
  collWidth: number;
}

const CollResizer = ({ setCollWidth, collRight, collWidth }: IProps) => {
  const [fullHeightResizer, setFullHeightResizer] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [valueResize, setValueResize] = useState<number>(0);
  const [right, setRight] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);

  return (
    <div
      className="col-resize"
      data-resize="col"
      style={{
        opacity: opacity,
        right: right + "px",
        bottom: fullHeightResizer ? -5000 : 0 + "px",
      }}
      onMouseDown={() => {
        setValueResize(0);
        setIsMouseDown(true);
        setFullHeightResizer(true);
        setOpacity(1);
      }}
    ></div>
  );
};

export default CollResizer;
