import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("UseEffect hook");

    if (value >= 1) {
      document.title = `Messages: ${value}`;
    }
  }, [value]);

  console.log("Rendered first");

  return (
    <>
      <h1>Messages {value}</h1>
      <button
        type="button"
        className="btn"
        onClick={() =>
          setValue((prevValue) => {
            return prevValue + 1;
          })
        }
      >
        Increase Value
      </button>
    </>
  );
};

export default UseEffectBasics;
