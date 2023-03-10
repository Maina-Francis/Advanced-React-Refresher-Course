import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      <h1>{text || "John Doe"}</h1>

      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>

      {isError && <h1>Error...</h1>}

      {/* Ternary operator*/}
      {isError ? <h2>There is an error...</h2> : <h2>There is no error</h2>}
    </>
  );
};

export default ShortCircuit;
