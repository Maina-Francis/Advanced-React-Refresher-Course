import { render } from "@testing-library/react";
import React, { useEffect, useRef } from "react";

// preserves the value
// does not trigger a re-render
// targets DOM nodes/elements

const UseRefBasics = () => {
  // ref container
  const inputElement = useRef(null);
  const h2Element = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputElement.current.value);
    console.log(h2Element.current.innerText);
  };
  // console.log(inputElement);

  useEffect(() => {
    inputElement.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" ref={inputElement} />
        <button type="submit">Submit</button>
      </form>
      <h2 ref={h2Element}>Hello world</h2>
    </>
  );
};

export default UseRefBasics;
