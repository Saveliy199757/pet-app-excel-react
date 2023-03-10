import React, { useCallback, useLayoutEffect, useState } from "react";
import { useActions } from "../../../../hooks/useActions";

interface IProps {
  id: number;
  isResizeRow: boolean;
  width?: number;
  height?: number;
  right?: number;
  bottom?: number;
}

const Resizer = ({
  id,
  isResizeRow = false,
  width = 0,
  height = 0,
  right = 0,
  bottom = 0,
}: IProps) => {
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [valueResize, setValueResize] = useState<number>(0);
  const [propertyStyle, setPropertyStyle] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);

  const { setRowHeight, setCellsWidth } = useActions();

  const resetState = useCallback(() => {
    setFullWidth(false);
    setIsMouseDown(false);
    setOpacity(0);
    setPropertyStyle(0);
  }, []);

  const handleOnMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseDown) {
        const delta = isResizeRow ? e.clientY - bottom : e.clientX - right;
        const resize = isResizeRow ? height + delta : width + delta;
        setValueResize(resize);
        setPropertyStyle(-delta);
      }
    },
    [isMouseDown]
  );

  const handleOnMouseUp = useCallback(() => {
    if (isMouseDown) {
      valueResize > 0 &&
        (isResizeRow
          ? setRowHeight(id, valueResize)
          : setCellsWidth(id, valueResize));
      resetState();
    }
  }, [isMouseDown, valueResize]);

  useLayoutEffect(() => {
    document.addEventListener("mousemove", handleOnMouseMove, {
      passive: true,
    });
    document.addEventListener("mouseup", handleOnMouseUp, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [isMouseDown, valueResize]);

  return (
    <div
      className={isResizeRow ? "row-resize" : "col-resize"}
      data-resize="row"
      style={{
        opacity: opacity,
        right: isResizeRow ? (fullWidth ? -5000 : 0 + "px") : propertyStyle,
        bottom: !isResizeRow ? (fullWidth ? -5000 : 0 + "px") : propertyStyle,
      }}
      onMouseDown={() => {
        setValueResize(0);
        setIsMouseDown(true);
        setFullWidth(true);
        setOpacity(1);
      }}
    ></div>
  );
};

export default Resizer;
