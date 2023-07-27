import { useState } from "react";

import "./App.css";
import NumberButtons from "./Components/NumberButtons";

function App() {
  return (
    <>
      <h1>012321</h1>
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
    </>
  );
}

export default App;
