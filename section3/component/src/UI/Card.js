import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  console.log('Card props: ', props);
  return (
    <div className={classes}>
      {props.children}
    </div>
    )
}

export default Card;