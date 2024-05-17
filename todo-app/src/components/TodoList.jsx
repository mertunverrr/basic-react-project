import React, { useState, useEffect } from "react";
import Todo from "./Todo";

function TodoList({
  dispatch,
  todos,
  filterAll,
  filterActive,
  filterCompleted,
}) {
  const [activeArray, setActiveArray] = useState([]);
  const [completedArray, setCompletedArray] = useState([]);
  useEffect(() => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setActiveArray(activeTodos);
  }, [todos, filterActive]);
  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed);
    setCompletedArray(completedTodos);
  }, [todos, filterCompleted]);
  return (
    <section className="mt-8 flex flex-col">
      {filterAll &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      {filterActive &&
        activeArray.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      {filterCompleted &&
        completedArray.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      <div className="justify-between flex bg-white p-4 text-gray-500 text-lg">
        <span className="text-gray-400">{activeArray.length} items left</span>
        <span
          className="cursor-pointer"
          onClick={() => dispatch({ type: "DELETE_ALL" })}
        >
          Clear
        </span>
      </div>
    </section>
  );
}

export default TodoList;
