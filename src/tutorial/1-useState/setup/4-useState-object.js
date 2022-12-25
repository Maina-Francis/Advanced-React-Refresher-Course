import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Francis",
    age: 22,
    message: "Wanna be the best engineer possible!",
  });
  // console.log(person);
  const changeAge = () => {
    setPerson({ ...person, message: "2023 is my year of growth" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeAge}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
