import React from "react";
import { TiTick } from "react-icons/ti";
import { LiaTimesSolid } from "react-icons/lia";

function Todo({ todo, dispatch }) {
  return (
    <div className="bg-white border-b-2 border-gray-200 p-4 text-lg flex justify-between ">
      <div className="flex ">
        <TiTick
          className={
            todo.completed
              ? "cursor-pointer text-2xl rounded-full p-0.5 bg-gradient-to-br from-linearfrom to-linearto text-white"
              : "cursor-pointer text-2xl rounded-full p-0.5 bg-purple-100 text-purple-100"
          }
          onClick={() => dispatch({ type: "COMPLETED_TODO", id: todo.id })}
        />
        <p
          className={
            todo.completed
              ? "text-purple-950 ml-4 items-center justify-center line-through"
              : "text-purple-950 ml-4 items-center justify-center"
          }
        >
          {todo.name}
        </p>
      </div>
      <LiaTimesSolid
        className="text-gray-400 text-2xl cursor-pointer"
        onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
      />
    </div>
  );
}

export default Todo;
