
const Goals = (props) => {
  console.log(props.input)

  return (
    <div>
      {props.input.map(e=>e)}
    </div>
  );
};

export default Goals;