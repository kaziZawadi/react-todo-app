function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />

          <span
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "#999" : "#000",
              marginLeft: "8px",
              marginRight: "12px",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
