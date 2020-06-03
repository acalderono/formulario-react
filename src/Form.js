import React from "react";

const Form = ({ addPerson }) => {
  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;

    addPerson(name, email);

    form.reset();
  };

  return (
    <form onSubmit={formSubmit}>
      <input id="name" type="text" defaultValue="" placeholder="Name..." />
      <input id="email" type="text" defaultValue="" placeholder="Email..." />
      <input type="submit" value="submit" />
    </form>
  );
};
export default Form;
