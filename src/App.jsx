import { useState, createContext } from "react";

import "./App.css";
import NumberButtons from "./Components/NumberButtons";

export const AppContext = createContext();
function App() {
  const [currentNum, setCurrentNum] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");

  const clear = () => {
    setCurrentNum(0);
  };

  const handleOperator = (operator) => {
    setCurrentOperator(operator);
    console.log(currentOperator);
  };
  return (
    <>
      <AppContext.Provider value={{ currentNum, setCurrentNum }}>
        <h1>{currentNum}</h1>
        <div className="wrapper">
          <NumberButtons />
          <div className="container-operator">
            <button onClick={() => handleOperator("+")}>+</button>
            <button onClick={() => handleOperator("-")}>-</button>
            <button onClick={() => handleOperator("*")}>*</button>
            <button onClick={() => handleOperator("/")}>/</button>
          </div>
        </div>
        <button>=</button>
        <button onClick={clear}>Clear</button>
      </AppContext.Provider>
    </>
  );
}

export default App;
