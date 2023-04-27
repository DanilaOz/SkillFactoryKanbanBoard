import { useState } from "react";
import { useMatch, Link } from "react-router-dom";
import FormEditDescription from "../FormEditDescription/FormEditDescription";
import styles from "./TaskDetail.module.css";

const TaskDetail = (props) => {
  const { taskId } = useMatch('/tasks/:taskId').params;
  const { tasks, setTasks } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const task = tasks.find(task => task.id === +taskId);

  const addNewDescription = (newDes) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === +taskId) {
        return { ...task, description: newDes };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleChangeDescription = () => {
    setFormVisible(!isFormVisible)
  }

  return (
    <div className={styles.wrapper}>
      {task ? (
        <>
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>{task.title}</h2>
            <Link to="/" className={styles.backToBoard}>&#10005;</Link>
          </div>
          <p className={styles.description}>{task.description || 'This task has no description'}</p>
          {!isFormVisible && (
            <button className={styles.editDescriptionBtn} onClick={handleChangeDescription}>Edit description</button>
          )}
          {isFormVisible && (
            <FormEditDescription task={task} addNewDescription={addNewDescription} setFormVisible={setFormVisible}/>
          )}
        </> ) : (
          <h2>Task with ID {taskId} not found</h2>
      )}
    </div>
  );
};

export default TaskDetail;
