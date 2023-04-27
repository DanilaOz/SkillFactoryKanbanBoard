import { useState } from "react";
import styles from "./FormAddNewTask.module.css";

const FormAddNewTask = (props) => {
  const { addNewTask, setFormVisible } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addNewTask(value);
    }
    setFormVisible(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={value}
        className={styles.formInput}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className={styles.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormAddNewTask;
