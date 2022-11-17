import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggel = () => {
    setIsActive(!isActive);
  };

  const restart = () => {
    setCount(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else if (!isActive && count !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, count]);

  return (
    <div className="App">
      <div className="Timer">
        <h1>{count}s</h1>
      </div>
      <div className="row">
        <button
          className={`btn btn-primary btn-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggel}
        >
          {" "}
          {isActive ? "Paush" : "Start"}
        </button>
        <button className="btn btn-primary" onClick={restart}>
          Reset
        </button>
      </div>
    </div>
  );
}
