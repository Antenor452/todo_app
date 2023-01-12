import { React } from "react";

import "./app.css";
import TodoForm from "./components/todo-form/todo_form";
import TodoList from "./components/todo-list/todo_list";

const App = () => {
  return (
    <div>
      <h5 className="title">Todo List!!</h5>
      <div className="mainBody">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
