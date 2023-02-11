import styles from './TodoItem.module.css'

const TodoItem = (props) => {
  return (
    <div className={styles.items}>
      {props.input && props.input.map((goal, index)=> (
        <div className={styles.item} key={index}>{goal}</div>
      ))}
    </div>
  );
};

export default TodoItem;