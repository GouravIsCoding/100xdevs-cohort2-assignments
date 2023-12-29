import { useState } from "react";

import "./App.css";
let globalId = 1;
let todoState = [];

function App() {
  const [state, setState] = useState([]);

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    if (!title || !description) return;
    todoState.push({
      title: title,
      description: description,
      id: globalId++,
    });

    setState((oldState) => todoState);
  }

  return (
    <>
      <input type="text" id="title" placeholder="Todo title" />
      <br />
      <input type="text" id="description" placeholder="Todo description" />
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      <br />

      <div id="todos">
        {state.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
