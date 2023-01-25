import './ExpenseDate.css';

function ExpenseDate(props) {
  const year = props.date.toLocaleString("ko-KR",  {year: "numeric"}); // 2023년
  const month = props.date.toLocaleString("ko-KR", {month: "long"}); // 1월
  const day = props.date.toLocaleString("ko-KR", {day: "2-digit"}); // 01일

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>  
      <div className='expense-date__month'>{month}</div>  
      <div className='expense-date__day'>{day}</div>
    </div>
    )
}

export default ExpenseDate;