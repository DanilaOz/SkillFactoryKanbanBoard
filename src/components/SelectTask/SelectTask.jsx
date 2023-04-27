import Select from "react-select";
import styles from "./SelectTask.module.css";

const SelectTask = (props) => {
  const { tasks, type, SelectedTask, setSelectVisible } = props;

  let options = [];
  tasks.map((task) => {
    options.push({
      value: task.title,
      label: task.title,
      id: task.id,
    });
  });

  const handleSelectTask = (newValue) => {
    SelectedTask(newValue, type);
    setSelectVisible(false);
  };

  return (
    <Select
      options={options}
      key={options.id}
      value={options.value}
      onChange={handleSelectTask}
      placeholder="Select task"
      className={styles.select}
    />
  );
};

export default SelectTask;
