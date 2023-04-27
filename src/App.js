import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
