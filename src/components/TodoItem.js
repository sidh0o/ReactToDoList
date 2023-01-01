import React from 'react'
import styles from '../style.module.css'
function TodoItem(props) {
    const handledelete =()=>{
       
        let items = props.todolist;
        const index = items.indexOf(props.item);
       items =  items.filter((item)=>{
            return item !== items[index];
        })
        // items.splice(index,1);
      
        props.setTodolist(items);
    }
  return (
    <div className={styles.todoitem}>
        <div className={styles.todoitem1}>{props.item}</div>
       <div className={styles.todoitem2}>  <input onClick={handledelete} className={styles.todoitem2button} type="submit" value="Done" /></div>
    </div>
  )
}

export default TodoItem