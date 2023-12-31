import { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
const NumberButtons = (props) => {
  const { setCurrentNum } = useContext(AppContext);

  const handleNumClick = (num) => {
    setCurrentNum((prevInput) => prevInput + num);
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/[1-9]/.test(key)) {
      handleNumClick(key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="container-num">
      <button onClick={() => handleNumClick("1")}>1</button>
      <button onClick={() => handleNumClick("2")}>2</button>
      <button onClick={() => handleNumClick("3")}>3</button>
      <button onClick={() => handleNumClick("4")}>4</button>
      <button onClick={() => handleNumClick("5")}>5</button>
      <button onClick={() => handleNumClick("6")}>6</button>
      <button onClick={() => handleNumClick("7")}>7</button>
      <button onClick={() => handleNumClick("8")}>8</button>
      <button onClick={() => handleNumClick("9")}>9</button>
      <button onClick={() => handleNumClick("0")}>0</button>
      <button onClick={props.clear}>Clear</button>
    </div>
  );
};

export default NumberButtons;
