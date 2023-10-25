import { useState } from "react";
import TaskCreate from "./TastCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDel = () => {
    onDelete(task.id);
  };
  const handleEdit = () => {
    setShowEdit(true);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) =>{
    setShowEdit(false)
    onUpdate(id,updatedTitle,updatedTaskDesc)
  }
  return (
    <div>
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDel}>Sil</button>
            <button onClick={handleEdit}>Güncelle</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
