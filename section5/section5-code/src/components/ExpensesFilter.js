import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  let selectedmonth;

  const handleChangeSelect = (e) => {
    selectedmonth = e.target.value;
    props.onSavemonthHandler(selectedmonth);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by month</label>
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