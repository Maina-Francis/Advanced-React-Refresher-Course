import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevNum) => {
        return prevNum + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Basic Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexIncrease}>
          Complex Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
