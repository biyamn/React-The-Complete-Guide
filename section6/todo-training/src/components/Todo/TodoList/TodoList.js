import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <div className={styles.container}>
      <TodoItem input={props.input}/>
    </div>
  );
};

export default TodoList;