import React, { useRef } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Formula = () => {
  const { activeCell } = useTypedSelector((state) => state.excelTable);

  return (
    <div className="excel__formula">
      <div className="icon">Fx</div>
      <input
        id="formula"
        className="input"
        contentEditable
        spellCheck="false"
        onChange={(event: any) => console.log(event.target.value)}
      ></input>
    </div>
  );
};

export default Formula;
