import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {label: '1일', value: 0},
    {label: '2일', value: 0},
    {label: '3일', value: 0},
    {label: '4일', value: 0},
    {label: '5일', value: 0},
    {label: '6일', value: 0},
    {label: '7일', value: 0},
    {label: '8일', value: 0},
    {label: '9일', value: 0},
    {label: '10일', value: 0},
    {label: '11일', value: 0},
    {label: '12일', value: 0},
    {label: '13일', value: 0},
    {label: '14일', value: 0},
    {label: '15일', value: 0},
    {label: '16일', value: 0},
    {label: '17일', value: 0},
    {label: '18일', value: 0},
    {label: '19일', value: 0},
    {label: '20일', value: 0},
    {label: '21일', value: 0},
    {label: '22일', value: 0},
    {label: '23일', value: 0},
    {label: '24일', value: 0},
    {label: '25일', value: 0},
    {label: '26일', value: 0},
    {label: '27일', value: 0},
    {label: '28일', value: 0},
    {label: '29일', value: 0},
    {label: '30일', value: 0},
    {label: '31일', value: 0},
  ];

  for (const expense of props.expenses) {
    const expenseDay = expense.date.getDate(); // 0월부터 시작
    chartDataPoints[expenseDay - 1].value += expense.amount;
  }
  return (
    <Chart dataPoints={chartDataPoints} />
  );
};

export default ExpensesChart;