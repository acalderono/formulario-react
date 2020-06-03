import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Form from "./Form";

const App = () => {
  const [state, setState] = useState({ people: [] });

  const addPerson = (name, email) => {
    setState(s => ({
      people: [...s.people, { name, email }]
    }));
  };

  const deletePerson = email => {
    return () => {
      setState(prev => ({
        people: prev.people.filter(person => person.email !== email)
      }));
    };
  };

  const doFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setState({ people: json });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <div className="App">
      <Form addPerson={addPerson} />
      <table>
        <thead>
          <tr>
            <th>LP</th>
            <th>USER</th>
            <th>EMAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.people.map((person, index) => {
            return (
              <tr key={person.email}>
                <th>{index + 1}</th>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>
                  <button onClick={deletePerson(person.email)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
