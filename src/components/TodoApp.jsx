import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    console.log("addTodo", text);

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>

      <TodoInput onAdd={addTodo} />

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default TodoApp;
