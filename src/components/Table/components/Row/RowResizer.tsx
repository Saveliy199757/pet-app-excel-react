import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DEFAULT_ROW_INFO_WIDTH } from "../../../../constans/table.constans";

interface IProps {
  setRowHeight: (h: number) => void;
  rowBottom: number;
}

const RowResizer = ({ setRowHeight, rowBottom }: IProps) => {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [bottom, setBottom] = useState<number>(0);
  const [opacity, setOpacity] = useState(0);
  const [clientY, setClientY] = useState(0);

  const handleOnMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isMouseDown) {
        console.log("sdf");
        const delta = e.clientY - rowBottom;
        setBottom(-delta);
      }
    },
    [isMouseDown]
  );

  useLayoutEffect(() => {
    document.addEventListener("mousemove", handleOnMouseMove, {
      passive: true,
    });
  }, [isMouseDown]);

  return (
    <div
      className="row-resize"
      data-resize="row"
      ref={ref}
      style={{ opacity: opacity, right: width + "px", bottom: bottom + "px" }}
      onMouseDown={() => {
        setIsMouseDown(true);
        setWidth(-5000);
        setOpacity(1);
      }}
      onMouseUp={() => {
        setWidth(DEFAULT_ROW_INFO_WIDTH - 1);
        setIsMouseDown(false);
        setOpacity(0);
      }}
      onMouseMove={(event) => {
        /*console.log(event);*/
      }}
    ></div>
  );
};

export default RowResizer;
