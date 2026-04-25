function FilterButtons({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button
        onClick={() => setFilter("all")}
        style={{
          fontWeight: filter === "all" ? "bold" : "normal",
          border: filter === "all" ? "2px solid black" : "1px solid #ccc",
        }}
      >
        Toutes
      </button>

      <button
        onClick={() => setFilter("active")}
        style={{
          fontWeight: filter === "active" ? "bold" : "normal",
          border: filter === "active" ? "2px solid black" : "1px solid #ccc",
        }}
      >
        Actives
      </button>

      <button
        onClick={() => setFilter("done")}
        style={{
          fontWeight: filter === "done" ? "bold" : "normal",
          border: filter === "done" ? "2px solid black" : "1px solid #ccc",
        }}
      >
        Terminées
      </button>
    </div>
  );
}

export default FilterButtons;
