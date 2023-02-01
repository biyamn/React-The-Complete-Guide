const Hamster = (props) => {
  console.log(props)
  console.log(props.children)
  return (
    <div>
      {props.children}
    </div>
    )
}

export default Hamster;