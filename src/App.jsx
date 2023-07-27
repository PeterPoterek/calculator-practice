import { useState, createContext } from "react";

import "./App.css";
import NumberButtons from "./Components/NumberButtons";

export const AppContext = createContext();
function App() {
  const [currentNum, setCurrentNum] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  const [prevNumber, setPrevNumber] = useState("");
  const [result, setResult] = useState("");
  const clear = () => {
    setCurrentNum("");
    setPrevNumber("");
    setResult("");
  };

  const handleOperator = (operator) => {
    setCurrentOperator(operator);
    setPrevNumber(currentNum);
    setCurrentNum("");
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

    setCurrentNum("");
    setPrevNumber("");
    setCurrentOperator("");
    setResult(result);
    console.log(result);
  };
  return (
    <>
      <AppContext.Provider value={{ currentNum, setCurrentNum }}>
        <span>{prevNumber}</span>
        <span>{currentOperator}</span>
        <span>{currentNum} </span>
        <span>{result}</span>
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
