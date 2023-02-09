const Goals = (props) => {
  const handleDelete = (index) => {
    props.onDelete(index)
  }

  return (
    <div>
      {props.input.map((goal, index)=> (
        <div key={index} onClick={handleDelete(index)}>{goal}</div>
      ))}
    </div>
  );
};

export default Goals;