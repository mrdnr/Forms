import "./App.css";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TastCreate";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post('http://localhost:3000/tasks',{
      title:title,
      taskDesc:taskDesc,
    })
    console.log(response)
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks)
  };
  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks')
    setTasks(response.data)
    console.log(response)
  }

  useEffect(()=>{
    fetchTasks();
  },[])
  const deleteTaskById = async (id) =>{
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const afterDeleteTasks= tasks.filter((task)=>{
      return task.id !==id;
    })
    setTasks(afterDeleteTasks);
    
  }
  const editTaskById = async (id,updatedTitle,updatedTaskDesc) =>{
    await axios.put(`http://localhost:3000/tasks/${id}`,{title:updatedTitle,taskDesc:updatedTaskDesc})
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
