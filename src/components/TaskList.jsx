import TaskItem from "./TaskItem.jsx";

export default function TaskList({ tasks, totalCount, onToggle, onDelete }) {
  // Conditional rendering: empty list
  if (tasks.length === 0) {
    return (
      <p className="empty">
        {totalCount === 0
          ? "No tasks available"
          : "No tasks match this filter"}
      </p>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
