import { LIST_TYPES, LIST_COPY } from "../../config";
import List from "../List/List";
import styles from "./Board.module.css";

const Board = (props) => {
  const { tasks, setTasks } = props;

  const addNewTask = (title) => {
    const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      title: title,
      status: LIST_TYPES.BACKLOG,
    };
    setTasks([...tasks, newTask]);
  };

  const SelectedTask = (newValue, type) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === newValue.id) {
        return { ...task, status: type };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const listTasksBacklog = tasks.filter(
    (task) => task.status === LIST_TYPES.BACKLOG
  );
  const listTasksReady = tasks.filter(
    (task) => task.status === LIST_TYPES.READY
  );
  const listTasksInProgress = tasks.filter(
    (task) => task.status === LIST_TYPES.IN_PROGRESS
  );

  return (
    <div className={styles.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type);
        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={listTasks}
            setTasks={setTasks}
            addNewTask={addNewTask}
            SelectedTask={SelectedTask}
            listTasksBacklog={listTasksBacklog}
            listTasksReady={listTasksReady}
            listTasksInProgress={listTasksInProgress}
          />
        );
      })}
    </div>
  );
};

export default Board;
