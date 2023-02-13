import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const TodoList = (props) => {
  const onDelete = (id) => props.onDelete(id);
  return (
    <div className={styles.container}>
      <TodoItem input={props.input} onDelete={onDelete}/>
    </div>
  );
};

export default TodoList;