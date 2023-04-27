import { useState } from "react";
import styles from "./FormEditDescription.module.css";

const FormEditDescription = (props) => {
  const { task, setFormVisible, addNewDescription } = props;
  const des = task.description;
  const [value, setValue] = useState(des);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewDescription(value);
    setFormVisible(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        type="text"
        className={styles.textareaDescription}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className={styles.submitBtn} type="submit">
        Save
      </button>
    </form>
  );
};

export default FormEditDescription;
