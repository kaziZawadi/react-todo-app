import { useState } from "react";

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  // 1. hooks (useState) pour gérer l'état d'édition d'une tâche, useEffect pour gérer les effets de bord liés à l'édition
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  if (todos.length === 0) {
    return <p>Aucune tâche à afficher.</p>;
  }

  // 2. fonctions internes

  // 3. rendu de la liste des tâches avec des boutons pour éditer, supprimer et basculer l'état "done"
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />

          {editingId === todo.id ? (
            <input
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              onBlur={() => {
                onEdit(todo.id, editingText);
                setEditingId(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onEdit(todo.id, editingText);
                  setEditingId(null);
                }

                if (e.key === "Escape") {
                  setEditingId(null);
                }
              }}
              autoFocus
              style={{ marginLeft: "8px", marginRight: "12px" }}
            />
          ) : (
            <span
              onDoubleClick={() => {
                setEditingId(todo.id);
                setEditingText(todo.text);
              }}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                color: todo.done ? "#999" : "#000",
                marginLeft: "8px",
                marginRight: "12px",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
          )}

          <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
