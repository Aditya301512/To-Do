import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { addTask, removeTask, loadTasks } from "./redux/taskSlice";
import { login, logout } from "./redux/authSlice";
import "./App.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const tasks = useSelector((state) => state.tasks);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask({ text: task, priority }));
      setTask("");
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="todo-container">
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <div className="task-input">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Add a new task..."
            />
            <select onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add</button>
          </div>
          <ul className="task-list">
            {tasks.map((t) => (
              <li key={t.id} className={`task-item ${t.priority}`}>
                {t.text} - {t.priority}
                <button onClick={() => handleDeleteTask(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
