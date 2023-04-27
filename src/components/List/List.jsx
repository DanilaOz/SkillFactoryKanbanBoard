import { useState } from "react";
import { Link } from 'react-router-dom';
import { LIST_TYPES } from "../../config";
import FormAddNewTask from "../FormAddNewTask/FormAddNewTask";
import SelectTask from "../SelectTask/SelectTask";
import styles from "./List.module.css";

const List = (props) => {
  const { title, type, tasks, addNewTask, SelectedTask, listTasksBacklog, listTasksReady, listTasksInProgress } = props;
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSelectVisible, setSelectVisible] = useState(false);

  const handleAddNewTask = () => {
    setFormVisible(!isFormVisible);
  };

  const handleAddTaskToReady = () => {
    setSelectVisible(!isSelectVisible);
  }

  return (
    <div className={styles.list}>
      <h2 className={styles.listTitle}>{title}</h2>
      {tasks.map((task) => {
        return (
          <Link key={task.id} to={`/tasks/${task.id}`} className={styles.taskLink}>
            <div className={styles.task}>
              {task.title}
            </div>
          </Link>
        );
      })}
      {type === LIST_TYPES.BACKLOG && !isFormVisible &&  (
        <button onClick={handleAddNewTask} className={styles.addCardBtn}>+ Add card</button>
      )}
      {type === LIST_TYPES.BACKLOG && isFormVisible && (
        <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
      )}
      {type === LIST_TYPES.READY && !isSelectVisible && (
        listTasksBacklog.length === 0 ?
        <button disabled onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> :
        <button onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> 
      )}
      {type === LIST_TYPES.READY && isSelectVisible && (
        <SelectTask type={type} tasks={listTasksBacklog} SelectedTask={SelectedTask} setSelectVisible={setSelectVisible}/>
      )}
      {type === LIST_TYPES.IN_PROGRESS && !isSelectVisible && (
        listTasksReady.length === 0 ?
        <button disabled onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> :
        <button onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> 
      )}
      {type === LIST_TYPES.IN_PROGRESS && isSelectVisible && (
        <SelectTask type={type} tasks={listTasksReady} SelectedTask={SelectedTask} setSelectVisible={setSelectVisible}/>
      )}
      {type === LIST_TYPES.FINISHED && !isSelectVisible && (
        listTasksInProgress.length === 0 ?
        <button disabled onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> :
        <button onClick={handleAddTaskToReady} className={styles.addCardBtn}>+ Add card</button> 
      )}
      {type === LIST_TYPES.FINISHED && isSelectVisible && (
        <SelectTask type={type} tasks={listTasksInProgress} SelectedTask={SelectedTask} setSelectVisible={setSelectVisible}/>
      )}
    </div>
  );
};

export default List;
