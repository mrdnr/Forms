import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate}) {
  const {editTaskById,createTask} = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-edit">
          <h3>Task Düzenleyin</h3>
          <form className="task-form">
            <label>Başlık Düzenleyin:</label>
            <input value={title} onChange={handleChange} />
            <label>Yapılacakları Düzenleyin:</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit}>Güncelle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Task Giriniz</h3>
          <form className="task-form">
            <label>Başlık:</label>
            <input value={title} onChange={handleChange} />
            <label>Yapılacak:</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
