import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "../Board/Board";
import TaskDetail from "../TaskDetail/TaskDetail";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Router>
        <Routes>
          <Route path="/" element={<Board {...props} />} />
          <Route path={"/tasks/:taskId"} element={<TaskDetail {...props} />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </main>
  );
};

export default Main;
