import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("submit", text);

    if (text.trim().length === 0) return;

    onAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="nouvelle tâche..."
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
