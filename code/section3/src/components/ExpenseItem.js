import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>2023년 1월 21일</div>
      <div className='expense-item__description'>
        <h2>붕어빵</h2>
        <div className='expense-item__price'>3,000 원</div>
      </div>
    </div>
  )
}

export default ExpenseItem;