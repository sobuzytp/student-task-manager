import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();

    // Form validation: no empty task
    if (!trimmed) {
      setError("Please enter a task before adding.");
      return;
    }

    onAdd(trimmed);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <input
          type="text"
          value={title}
          placeholder="e.g. Finish React assignment"
          aria-label="Task title"
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
        />
        <button type="submit" className="btn-primary">
          Add Task
        </button>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
    </form>
  );
}
