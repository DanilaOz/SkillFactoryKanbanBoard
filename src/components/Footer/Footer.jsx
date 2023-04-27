import { LIST_TYPES } from "../../config";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const { tasks } = props;

  const listActiveCount = tasks.filter(
    (task) => task.status === LIST_TYPES.BACKLOG
  );
  const listFinishedCount = tasks.filter(
    (task) => task.status === LIST_TYPES.FINISHED
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.taskCounter}>
        <p>Active tasks: {listActiveCount.length} </p>
        <p>Finished tasks: {listFinishedCount.length} </p>
      </div>
      <p className={styles.name}>Kanban board by Kolchanov Danila, 2023</p>
    </footer>
  );
};

export default Footer;
