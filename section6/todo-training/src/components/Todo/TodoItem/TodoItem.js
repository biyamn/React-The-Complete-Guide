import React from 'react'
import styles from './TodoItem.module.css'

const TodoItem = (props) => {
  const onDelete = (id) => props.onDelete(id);
  console.log(props.item)
  return (
    <div className={styles.items}>
      {props.item.map((todo) => (
        <div className={styles.item} key={todo.id} onClick={() => onDelete(todo.id)}>{todo.text}</div>
      ))}
      

        {/* onClick={onDelete(id)}라고 하면.. 렌더링을 하는 도중에 이 함수가 바로 실행되는 거라서 원하는 결과와 다르고 아래의 오류가 남
        Warning: Cannot update a component (`Todo`) while rendering a different component (`TodoItem`). To locate the bad setState() call inside `TodoItem`, follow the stack trace as described in
        onClick={() => onDelete(id)}라고 하면 함수 표현식을 넘기는 것(전에는 함수 호출) */}

        {/* {props.input && props.input.map((todo)=> (
          React.createElement('div', {
            className: styles.item,
            key: todo.id,
            onClick: onDelete(todo.id)
          }, todo.text)

          > const getFunction = (x) => () => console.log(x*2)
          undefined
          > const b = getFunction(12)
          undefined
          > b
          [Function (anonymous)]
          > b()
          24
        ))} */}

    </div>
  );
};

export default TodoItem;