import React from "react";
import "./todo.css";

const TodoForm = () => {
  return (
    <form action="" className="form">
      <input
        type="text"
        name=""
        id="list_form"
        placeholder="enter your list item here ..."
      />
      <button className="btn-submit">Add to list </button>
    </form>
  );
};

export default TodoForm;
