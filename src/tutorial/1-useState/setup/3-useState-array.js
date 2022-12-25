import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const removeItem = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
