import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2023, 0, 21);
  const expenseTitle = '붕어빵';
  const expenseAmount = 3_000;
  return (
    <div className='expense-item'>
      <div>{expenseDate.toLocaleString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>₩{expenseAmount.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;