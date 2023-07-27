import { useState } from "react";

const NumberButtons = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const handleNumClick = (num) => {
    switch (num) {
      case 1:
        console.log(num);
        setCurrentNum(num);
        break;
      case 2:
        console.log(num);
        setCurrentNum(num);
        break;
      case 3:
        console.log(num);
        setCurrentNum(num);
        break;
      case 4:
        console.log(num);
        setCurrentNum(num);
        break;
      case 5:
        console.log(num);
        setCurrentNum(num);
        break;
      case 6:
        console.log(num);
        setCurrentNum(num);
        break;
      case 7:
        console.log(num);
        setCurrentNum(num);
        break;
      case 8:
        console.log(num);
        setCurrentNum(num);
        break;
      case 9:
        console.log(num);
        setCurrentNum(num);
        break;
      default:
        console.log("Invalid number");
    }
  };
  return (
    <div className="container-num">
      <button onClick={() => handleNumClick(1)}>1</button>
      <button onClick={() => handleNumClick(2)}>2</button>
      <button onClick={() => handleNumClick(3)}>3</button>
      <button onClick={() => handleNumClick(4)}>4</button>
      <button onClick={() => handleNumClick(5)}>5</button>
      <button onClick={() => handleNumClick(6)}>6</button>
      <button onClick={() => handleNumClick(7)}>7</button>
      <button onClick={() => handleNumClick(8)}>8</button>
      <button onClick={() => handleNumClick(9)}>9</button>
    </div>
  );
};

export default NumberButtons;
