
import styles from "../style.module.css";
const Form = ({name,setName,todolist,setTodolist}) => {
 
  const handleChange = (event) => {
    let name = event.target.value;
    setName(name);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedList = todolist;
    updatedList = [...updatedList, name];
    setName("");
    setTodolist(updatedList);
  };
  return (
    <div className={styles.todoform}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
        className={styles.forminput}
          type="text"
          name="Name"
          id="Name"
          value={name}
          onChange={handleChange}
          placeholder="Add to do item"
        />
        <input className={styles.formbutton} type="submit" value="Add"></input>
      </form>
    </div>
  );
};

export default Form;
