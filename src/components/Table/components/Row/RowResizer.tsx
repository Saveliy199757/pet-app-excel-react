import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

interface IProps {
  setRowHeight: (h: number) => void;
  rowBottom: number;
  rowHeight: number;
}

const RowResizer = ({ setRowHeight, rowBottom, rowHeight }: IProps) => {
  const ref = useRef<any>(null);
  const [right, setRight] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [bottom, setBottom] = useState<number>(0);
  const [valueResizer, setValueResizer] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);

  const handleOnMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseDown) {
        const delta = e.clientY - rowBottom;
        console.log("e.clientY", e.clientY);
        console.log("rowBottom", rowBottom);
        console.log("delta", e.clientY - rowBottom);
        setValueResizer(rowHeight + delta);
        setBottom(-delta);
      }
    },
    [isMouseDown]
  );

  const handleOnMouseUp = useCallback(() => {
    document.removeEventListener("mousemove", handleOnMouseMove);
    document.removeEventListener("mouseup", handleOnMouseUp);
    if (isMouseDown) {
      console.log(
        "up =========================================================="
      );
      setRowHeight(valueResizer);
      setRight(0);
      setIsMouseDown(false);
      setOpacity(0);
      setBottom(0);
    }
  }, [isMouseDown, valueResizer]);

  useLayoutEffect(() => {
    document.addEventListener("mousemove", handleOnMouseMove);
    document.addEventListener("mouseup", handleOnMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [isMouseDown, valueResizer, rowBottom]);

  return (
    <div
      className="row-resize"
      data-resize="row"
      ref={ref}
      style={{ opacity: opacity, right: right + "px", bottom: bottom + "px" }}
      onMouseDown={(e) => {
        console.log("e.target", e.target);
        setValueResizer(0);
        setIsMouseDown(true);
        setRight(-5000);
        setOpacity(1);
      }}
    ></div>
  );
};

export default RowResizer;
