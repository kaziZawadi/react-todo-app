function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
