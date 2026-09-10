import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const nums = new Array(300_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 290_000
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>

        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);

            if (count === 9) {
              setNumbers(
                new Array(300_000).fill(0).map((_, i) => {
                  return {
                    index: i,
                    isMagical: i === 290_000
                  };
                })
              );
            }
          }}
        >
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;