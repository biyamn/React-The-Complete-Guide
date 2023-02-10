import styles from './GoalTitle.module.css';

const GoalTitle = (props) => {
  return (
    <div>
      <div className={styles.goalTitle}>{props.input}</div>
    </div>
  );
};

export default GoalTitle;