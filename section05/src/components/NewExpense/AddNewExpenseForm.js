const AddNewExpenseForm = (props) => {
  const changeState = () => {
    props.setIsAddNewExpense(!props.isAddNewExpense)
  }

  return (
    <div>
      <button onClick={changeState}>새롭게 등록하기</button>
    </div>
  );
};

export default AddNewExpenseForm;