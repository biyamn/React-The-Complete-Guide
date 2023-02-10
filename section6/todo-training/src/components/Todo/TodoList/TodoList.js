const Goals = (props) => {

  return (
    <div>
      {props.input.map((goal, index)=> (
        <div key={index}>{goal}</div>
      ))}
    </div>
  );
};

export default Goals;