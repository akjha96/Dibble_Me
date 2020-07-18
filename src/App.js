import React, { useState } from "react";

import "./App.css";

const handleCounter = (number) => {
  return number * 2;
};

const App = () => {
  // React Hooks
  const [counter, setCounter] = useState(1);

  let stomachFull = counter > 300;
  if (stomachFull) {
    alert("Private! I am full!!!");
  }
  return (
    <div className="App">
      <header className="App-header">Hello World!</header>
      {/* Button to  be clicked */}
      <div className="buttonStyle">
        <div>
          <button
            onClick={() => {
              setCounter(handleCounter(counter));
            }}
          >
            Dibble me
          </button>
        </div>
        <div className="labelStyle">
          {/* Value to be displayed */}
          <label>{counter}</label>
        </div>
      </div>
    </div>
  );
};

export default App;
