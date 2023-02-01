import React, { useCallback, useLayoutEffect, useState } from "react";

interface IProps {
  setRowHeight: (height: number) => void;
  rowBottom: number;
  rowHeight: number;
}

const RowResizer = ({ setRowHeight, rowBottom, rowHeight }: IProps) => {
  const [fullWidthResizer, setFullWidthResizer] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [valueResizer, setValueResizer] = useState<number>(0);
  const [bottom, setBottom] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);

  const resetState = useCallback(() => {
    setFullWidthResizer(false);
    setIsMouseDown(false);
    setOpacity(0);
    setBottom(0);
  }, []);

  const handleOnMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseDown) {
        const delta = e.clientY - rowBottom;
        setValueResizer(rowHeight + delta);
        setBottom(-delta);
      }
    },
    [isMouseDown]
  );

  const handleOnMouseUp = useCallback(() => {
    if (isMouseDown) {
      valueResizer > 0 && setRowHeight(valueResizer);
      resetState();
    }
  }, [isMouseDown, valueResizer]);

  useLayoutEffect(() => {
    document.addEventListener("mousemove", handleOnMouseMove);
    document.addEventListener("mouseup", handleOnMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [isMouseDown, valueResizer]);

  return (
    <div
      className="row-resize"
      data-resize="row"
      style={{
        opacity: opacity,
        right: fullWidthResizer ? -5000 : 0 + "px",
        bottom: bottom + "px",
      }}
      onMouseDown={() => {
        setValueResizer(0);
        setIsMouseDown(true);
        setFullWidthResizer(true);
        setOpacity(1);
      }}
    ></div>
  );
};

export default RowResizer;
