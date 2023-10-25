import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TastCreate";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [...tasks, { id: Math.round(Math.random() * 999999),title:title,taskDesc:taskDesc }];
    setTasks(createdTasks)
  };
  const deleteTaskById = (id) =>{
    const afterDeleteTasks= tasks.filter((task)=>{
      return task.id !==id;
    })
    setTasks(afterDeleteTasks);
    
  }
  const editTaskById = (id,updatedTitle,updatedTaskDesc) =>{
    const updatedTasks = tasks.map((task)=>{
      if(task.id === id){
        return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="main">
      <TaskCreate onCreate={createTask} />
      <h2>Görevler</h2>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
