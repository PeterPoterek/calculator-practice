import { useState, createContext } from "react";
import "./App.css";
import NumberButtons from "./Components/NumberButtons";
import Operators from "./Components/Operators";

export const AppContext = createContext();

function App() {
  const [currentNum, setCurrentNum] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [result, setResult] = useState("");

  const clearUI = (currNumFlag, prevNumFlag, resultFlag, operatorFlag) => {
    if (currNumFlag) setCurrentNum("");
    if (prevNumFlag) setPrevNumber("");
    if (resultFlag) setResult("");
    if (operatorFlag) setCurrentOperator("");
  };

  const clear = () => {
    clearUI(true, true, true, true);
  };

  const calculate = () => {
    let num1 = Number(currentNum);
    let num2 = Number(prevNumber);
    let result = 0;

    switch (currentOperator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 / num1;
        break;
      default:
        return;
    }

    clearUI(false, true, false, true);
    setResult(result);
    setCurrentNum(result);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          currentNum,
          setCurrentNum,
          prevNumber,
          setPrevNumber,
          currentOperator,
          setCurrentOperator,
          clearUI,
        }}
      >
        <span>{prevNumber}</span>
        <span>{currentOperator}</span>
        <span>{currentNum} </span>
        <div className="wrapper">
          <NumberButtons clear={clear} />
          <Operators calculate={calculate} />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
