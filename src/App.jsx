import { useState, createContext } from "react";

import "./App.css";
import NumberButtons from "./Components/NumberButtons";

export const AppContext = createContext();
function App() {
  const [currentNum, setCurrentNum] = useState("");

  const clear = () => {
    setCurrentNum(0);
  };
  return (
    <>
      <AppContext.Provider value={{ currentNum, setCurrentNum }}>
        <h1>{currentNum}</h1>
        <div className="wrapper">
          <NumberButtons />
          <div className="container-operator">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
          </div>
        </div>
        <button>=</button>
        <button onClick={clear}>Clear</button>
      </AppContext.Provider>
    </>
  );
}

export default App;
