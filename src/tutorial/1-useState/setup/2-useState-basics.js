import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("Random Title");

  const handleClick = () => {
    if (title === "Random Title") {
      setTitle("New Title");
    } else {
      setTitle("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
