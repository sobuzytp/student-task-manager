import { useState } from "react";
import Card from "./components/Card.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskStats from "./components/TaskStats.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    // Bonus: confirmation before deleting
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  // Bonus: filter All / Completed / Pending
  const visibleTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <main className="app">
      <h1>Student Task Manager</h1>

      <Card title="Add a new task">
        <TaskForm onAdd={addTask} />
      </Card>

      <Card title="Your progress">
        <TaskStats total={total} completed={completed} remaining={remaining} />
      </Card>

      <Card title="Your tasks">
        <FilterBar filter={filter} onChange={setFilter} />
        {/* Bonus: friendly fallback UI if list cannot be displayed */}
        <ErrorBoundary>
          <TaskList
            tasks={visibleTasks}
            totalCount={total}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </ErrorBoundary>
      </Card>
    </main>
  );
}
