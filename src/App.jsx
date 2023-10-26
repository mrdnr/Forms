import "./App.css";
import { useEffect, useContext } from "react";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TastCreate";
import TasksContext from "./context/task";

function App() {
  const {fetchTasks} = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="main">
      <TaskCreate/>
      <h2>Görevler</h2>
      <TaskList/>
    </div>
  );
}

export default App;
