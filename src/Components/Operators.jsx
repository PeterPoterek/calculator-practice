import React, { useContext } from "react";
import { AppContext } from "../App";

const Operators = () => {
  const { currentNum, prevNumber, setPrevNumber, currentOperator, setCurrentOperator, clearUI } = useContext(AppContext);
  const handleOperator = (operator) => {
    if (currentOperator === operator) return;
    if (currentNum === "") return;
    setCurrentOperator(operator);
    setPrevNumber(currentNum);

    clearUI(true, false, false, false);

    console.log(currentOperator);
  };
  return (
    <div className="container-operator">
      <button onClick={() => handleOperator("+")}>+</button>
      <button onClick={() => handleOperator("-")}>-</button>
      <button onClick={() => handleOperator("*")}>*</button>
      <button onClick={() => handleOperator("/")}>/</button>
    </div>
  );
};

export default Operators;
