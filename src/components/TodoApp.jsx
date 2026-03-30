import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function addTodo(text) {
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <h1>Todo App</h1>

      <TodoInput onAdd={addTodo} />

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFilter("all")}>Toutes</button>
        <button onClick={() => setFilter("active")}>Actives</button>
        <button onClick={() => setFilter("done")}>Terminées</button>
      </div>

      <p>{activeCount} tâche(s) active(s) restante(S)</p>

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />

      <button onClick={clearCompleted} disabled={completedCount === 0}>
        Supprimer les tâches terminées
      </button>
    </div>
  );
}

export default TodoApp;
