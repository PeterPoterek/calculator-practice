import { useState, createContext } from "react";

import "./App.css";
import NumberButtons from "./Components/NumberButtons";

export const AppContext = createContext();
function App() {
  const [currentNum, setCurrentNum] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  const [prevNumber, setPrevNumber] = useState("");

  const [result, setResult] = useState("");

  const clearUI = (currNumFlag, prevNumFlag, resultFlag, operatorFlag) => {
    if (currNumFlag) {
      setCurrentNum("");
    }
    if (prevNumFlag) {
      setPrevNumber("");
    }
    if (resultFlag) {
      setResult("");
    }
    if (operatorFlag) {
      setCurrentOperator("");
    }
  };

  const clear = () => {
    clearUI(true, true, true, true);
  };

  const handleOperator = (operator) => {
    setCurrentOperator(operator);
    setPrevNumber(currentNum);
    clearUI(true, false, false, false);

    console.log(currentOperator);
  };

  const calculate = () => {
    let num1 = Number(currentNum);
    let num2 = Number(prevNumber);
    let result = 0;
    if (currentOperator === "+") {
      result = num1 + num2;
    }
    if (currentOperator === "-") {
      result = num1 - num2;
    }
    if (currentOperator === "*") {
      result = num1 * num2;
    }
    if (currentOperator === "/") {
      result = num1 / num2;
    }

    clearUI(false, true, false, true);
    setResult(result);
    setCurrentNum(result);
    console.log(result);
  };
  return (
    <>
      <AppContext.Provider value={{ currentNum, setCurrentNum }}>
        <h1>{result}</h1>
        <span>{prevNumber}</span>
        <span>{currentOperator}</span>
        <span>{currentNum} </span>
        <div className="wrapper">
          <NumberButtons />
          <div className="container-operator">
            <button onClick={() => handleOperator("+")}>+</button>
            <button onClick={() => handleOperator("-")}>-</button>
            <button onClick={() => handleOperator("*")}>*</button>
            <button onClick={() => handleOperator("/")}>/</button>
          </div>
        </div>
        <button onClick={clear}>Clear</button>
        <button onClick={calculate}>=</button>
      </AppContext.Provider>
    </>
  );
}

export default App;
