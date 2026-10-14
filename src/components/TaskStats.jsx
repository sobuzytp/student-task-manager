export default function TaskStats({ total, completed, remaining }) {
  return (
    <div className="stats">
      <div>
        <strong>{total}</strong>
        <span>Total tasks</span>
      </div>
      <div>
        <strong>{completed}</strong>
        <span>Completed</span>
      </div>
      <div>
        <strong>{remaining}</strong>
        <span>Remaining</span>
      </div>
    </div>
  );
}
