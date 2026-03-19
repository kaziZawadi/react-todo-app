import { useState } from "react";
import CounterButton from "./CounterButton";

function Counter({ title, min, max, step }) {
  const [count, setCount] = useState(min);

  function increment() {
    setCount((c) => (c >= max ? c : c + step));
  }

  function decrement() {
    setCount((c) => (c <= min ? c : c - step));
  }

  function reset() {
    setCount(min);
  }

  const atMin = count <= min;
  const atMax = count >= max;

  return (
    <section style={{ border: "1px solid #ddd", padding: 12, marginTop: 12 }}>
      <h2>{title}</h2>

      <p>
        value: <strong>{count}</strong> (Range: {min}-{max})
      </p>

      <CounterButton label="-" onClick={decrement} disabled={atMin} />
      <CounterButton label="+" onClick={increment} disabled={atMax} />
      <CounterButton label="reset" onClick={reset} disabled={count === min} />
    </section>
  );
}

export default Counter;
