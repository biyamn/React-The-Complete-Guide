import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month28 = [2];
  let chartDataPoints = [];

  if (month28.includes(parseInt(props.month))) {
    chartDataPoints = 
    [
      {label: '1', value: 0},
    {label: '2', value: 0},
    {label: '3', value: 0},
    {label: '4', value: 0},
    {label: '5', value: 0},
    {label: '6', value: 0},
    {label: '7', value: 0},
    {label: '8', value: 0},
    {label: '9', value: 0},
    {label: '10', value: 0},
    {label: '11', value: 0},
    {label: '12', value: 0},
    {label: '13', value: 0},
    {label: '14', value: 0},
    {label: '15', value: 0},
    {label: '16', value: 0},
    {label: '17', value: 0},
    {label: '18', value: 0},
    {label: '19', value: 0},
    {label: '20', value: 0},
    {label: '21', value: 0},
    {label: '22', value: 0},
    {label: '23', value: 0},
    {label: '24', value: 0},
    {label: '25', value: 0},
    {label: '26', value: 0},
    {label: '27', value: 0},
    {label: '28', value: 0},
    ]
  } else if ((month31.includes(parseInt(props.month)))) {
    chartDataPoints = 
    [
    {label: '1', value: 0},
    {label: '2', value: 0},
    {label: '3', value: 0},
    {label: '4', value: 0},
    {label: '5', value: 0},
    {label: '6', value: 0},
    {label: '7', value: 0},
    {label: '8', value: 0},
    {label: '9', value: 0},
    {label: '10', value: 0},
    {label: '11', value: 0},
    {label: '12', value: 0},
    {label: '13', value: 0},
    {label: '14', value: 0},
    {label: '15', value: 0},
    {label: '16', value: 0},
    {label: '17', value: 0},
    {label: '18', value: 0},
    {label: '19', value: 0},
    {label: '20', value: 0},
    {label: '21', value: 0},
    {label: '22', value: 0},
    {label: '23', value: 0},
    {label: '24', value: 0},
    {label: '25', value: 0},
    {label: '26', value: 0},
    {label: '27', value: 0},
    {label: '28', value: 0},
    {label: '29', value: 0},
    {label: '30', value: 0},
    {label: '31', value: 0},
  ]} else {
    chartDataPoints = 
    [
    {label: '1', value: 0},
    {label: '2', value: 0},
    {label: '3', value: 0},
    {label: '4', value: 0},
    {label: '5', value: 0},
    {label: '6', value: 0},
    {label: '7', value: 0},
    {label: '8', value: 0},
    {label: '9', value: 0},
    {label: '10', value: 0},
    {label: '11', value: 0},
    {label: '12', value: 0},
    {label: '13', value: 0},
    {label: '14', value: 0},
    {label: '15', value: 0},
    {label: '16', value: 0},
    {label: '17', value: 0},
    {label: '18', value: 0},
    {label: '19', value: 0},
    {label: '20', value: 0},
    {label: '21', value: 0},
    {label: '22', value: 0},
    {label: '23', value: 0},
    {label: '24', value: 0},
    {label: '25', value: 0},
    {label: '26', value: 0},
    {label: '27', value: 0},
    {label: '28', value: 0},
    {label: '29', value: 0},
    {label: '30', value: 0},
    ]
  }

  for (const expense of props.expenses) {
    const expenseDay = expense.date.getDate(); // 0월부터 시작
    chartDataPoints[expenseDay - 1].value += expense.amount;
  }

  
  return (
    <Chart dataPoints={chartDataPoints} />
  );
};

export default ExpensesChart;