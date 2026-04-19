import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task || tasks.length >= 2) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task App</h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
        disabled={tasks.length >= 2}
      />

      <button
        onClick={addTask}
        disabled={tasks.length >= 2}
      >
        Add
      </button>

      <h3>Tasks</h3>

      {tasks.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}

      {tasks.length >= 2 && (
        <p style={{ color: "red" }}>
          Maximum 2 tasks allowed
        </p>
      )}
    </div>
  );
}