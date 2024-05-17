import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const DELETE_ALL = "DELETE_ALL";
const COMPLETED_TODO = "COMPLETED_TODO";

const reducer = (todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        name: action.payload.name,
        completed: false,
      };
      const updatedTodos = [...todos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;

    case DELETE_TODO:
      const filteredTodos = todos.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(filteredTodos));
      return filteredTodos;

    case DELETE_ALL:
      localStorage.removeItem("todos");
      return [];

    case COMPLETED_TODO:
      const updatedCompletedTodos = todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return { ...todo };
      });
      localStorage.setItem("todos", JSON.stringify(updatedCompletedTodos));
      return updatedCompletedTodos;

    default:
      return todos;
  }
};

function App() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filterAll, setFilterAll] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Header />
      <AddTodo dispatch={dispatch} setName={setName} name={name} />
      <TodoList
        todos={todos}
        dispatch={dispatch}
        filterAll={filterAll}
        filterActive={filterActive}
        filterCompleted={filterCompleted}
      />
      <Filter
        setFilterAll={setFilterAll}
        setFilterActive={setFilterActive}
        setFilterCompleted={setFilterCompleted}
        filterAll={filterAll}
        filterActive={filterActive}
        filterCompleted={filterCompleted}
      />
    </div>
  );
}

export default App;
