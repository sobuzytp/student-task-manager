export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task done" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="title">{task.title}</span>
      </label>
      <span className={task.completed ? "badge badge-done" : "badge"}>
        {task.completed ? "Completed" : "Pending"}
      </span>
      <button
        type="button"
        className="btn-delete"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}
