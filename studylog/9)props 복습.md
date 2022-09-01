# props 복습 💡

## App.js

App.js를 봐보자. expense라는 객체를 정의하고 있다. 

```jsx
const expense = [
    {
      title: 'Toilet paper',
      amount: '24.5',
      date: new Date(2022, 0, 1),
    },
    {
      title: 'Phone',
      amount: '243.8',
      date: new Date(2022, 0, 2),
    },
    {
      title: 'Jelly',
      amount: '4.5',
      date: new Date(2022, 0, 2),
    },
    {
      title: 'Flower',
      amount: '9.4',
      date: new Date(2022, 0, 4),
    }
```

그리고 아래와 같이 Expenses에 expense를 items로 정의하여 보내고 있다. 

```jsx
return (
    <div>
      <Expenses items={expense}/>
    </div>
  );
```

## Expenses.js

Expenses.js에 가보자. 아래와 같이 props를 가져오고 있다. expense를 보냈으므로

```jsx
function Expenses(props) {
  console.log(props);
```

props를 콘솔창에 찍어보면 아래와 같이 expense 객체가 반환되는 것을 알 수 있다.

```jsx
{items: Array(4)}
items: Array(4)
0: {title: 'Toilet paper', amount: '24.5', date: Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)}
1: {title: 'Phone', amount: '243.8', date: Sun Jan 02 2022 00:00:00 GMT+0900 (한국 표준시)}
2: {title: 'Jelly', amount: '4.5', date: Sun Jan 02 2022 00:00:00 GMT+0900 (한국 표준시)}
3: {title: 'Flower', amount: '9.4', date: Tue Jan 04 2022 00:00:00 GMT+0900 (한국 표준시)}
length: 4
[[Prototype]]: Array(0)
[[Prototype]]: Object
```

여기 있는 것들을 꺼내 쓰려면 props.items[0].title 이런식으로 쓸 수 있다. 

아래로 가보면 ExpenseItem이라는 컴포넌트에 expense의 값들을 보내는 것을 알 수 있다. ExpenseItem.js로 가보자

```jsx
return (
  <div>
    <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date={props.items[0].date}
      />
```

## ExpenseItem.js

props를 넘겨 받고 있는데 콘솔로 찍어보면 

```jsx
function ExpenseItem(props) {
  // 콘솔로 찍어보자!! props / props.date
	console.log(props)
}
```

{title: 'Toilet paper', amount: '24.5', date: Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)}
{title: 'Phone', amount: '243.8', date: Sun Jan 02 2022 00:00:00 GMT+0900 (한국 표준시)}
{title: 'Jelly', amount: '4.5', date: Sun Jan 02 2022 00:00:00 GMT+0900 (한국 표준시)}
{title: 'Flower', amount: '9.4', date: Tue Jan 04 2022 00:00:00 GMT+0900 (한국 표준시)}

이렇게 찍히는 것을 알 수 있다. ExpenseItem 네 개에 각각 하나씩 배정했으므로 값을 가져다 쓰려면 {props.title}와 같이 사용하면 된다. 

ExpenseDate라는 프로퍼티가 있고 {props.date}를 date라고 정하여 같이 보낸다. ExpenseDate.js에 가보자.

```jsx
return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>

  )
```

## ExpenseDate.js

props를 받아오는데, 이 props는 props.date를 받아온 것이다. 콘솔로 찍어보면 다음과 같이 받아온 것을 알 수 있다.

```jsx
function ExpenseDate(props) {
  console.log(props)
```

{date: Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)}
{date: Mon Mar 21 2022 00:00:00 GMT+0900 (한국 표준시)}
{date: Sun Jun 19 2022 00:00:00 GMT+0900 (한국 표준시)}
{date: Sun Dec 04 2022 00:00:00 GMT+0900 (한국 표준시)}

쓸 때는 props.date.() 으로 쓸 수 있다. 

```jsx
const month = props.date.toLocaleString('en-US', { month: 'long' });
const day = props.date.toLocaleString('en-US', { day: '2-digit' });
const year = props.date.getFullYear();
```

### 복습 끝! props에 대해 좀 더 이해한 기분이다.
