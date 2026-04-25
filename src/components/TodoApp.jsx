import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";

function TodoApp() {
  // 1. STATE - Initialisation des todos à partir de localStorage ou avec une liste vide
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  // 2. EFFECT - Sauvegarde des todos dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 3. CRUD - Fonctions pour ajouter, éditer, supprimer et basculer les todos
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos([...todos, newTodo]);
  }

  function editTodo(id, newText) {
    const text = newText.trim();

    if (text.length === 0) {
      setTodos(todos.filter((todo) => todo.id !== id));
      return;
    }

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo)),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // 4. ACTIONS - Fonction pour basculer l'état "done" d'une tâche
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  // Fonction pour supprimer toutes les tâches terminées
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.done));
  }

  // 5. DERIVED DATA - Filtrage des todos en fonction du filtre sélectionné
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  // 6. UI - Rendu de l'application avec les composants d'entrée, de liste et de filtrage
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Todo App </h1>
      <TodoInput onAdd={addTodo} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <p>{activeCount} tâche(s) active(s) restante(S)</p>
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
      <button onClick={clearCompleted} disabled={completedCount === 0}>
        Supprimer les tâches terminées
      </button>
    </div>
  );
}

export default TodoApp;
