import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  let selectedMonth;

  const handleChangeSelect = (e) => {
    selectedMonth = e.target.value;
    props.onSaveMonthHandler(selectedMonth);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>달 별로 필터링하기</label>
        <select value={props.selected} onChange={handleChangeSelect}>
          <option value='1'>1월</option>
          <option value='2'>2월</option>
          <option value='3'>3월</option>
          <option value='4'>4월</option>
          <option value='5'>5월</option>
          <option value='6'>6월</option>
          <option value='7'>7월</option>
          <option value='8'>8월</option>
          <option value='9'>9월</option>
          <option value='10'>10월</option>
          <option value='11'>11월</option>
          <option value='12'>12월</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;