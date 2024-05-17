import React from "react";

function AddTodo({ dispatch, setName, name }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name } });
    setName("");
  };
  return (
    <form
      className="flex justify-between mt-12 text-purple-950"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Create a new todo..."
        className="py-3 pl-6 w-9/12 rounded-md outline-none text-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="w-32 bg-white rounded-md p-3 font-medium text-lg">
        Add todo
      </button>
    </form>
  );
}

export default AddTodo;
