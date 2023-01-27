import React from "react";

const Formula = () => {
  return (
    <div className="excel__formula">
      <div className="icon">Fx</div>
      <div
        id="formula"
        className="input"
        contentEditable
        spellCheck="false"
      ></div>
    </div>
  );
};

export default Formula;
