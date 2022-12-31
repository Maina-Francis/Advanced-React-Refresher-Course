import React from "react";
import ControlledInputs from "./tutorial/4-forms/setup/1-controlled-inputs";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" />
            <button type="submit">Add Person</button>
          </div>
        </form>
      </article>
    </>
  );
}

export default App;
