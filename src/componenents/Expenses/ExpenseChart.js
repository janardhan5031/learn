
import Chart from '../Chart/Chart';

function ExpenseChart(props) {
    const chartDataPoints = [
        { lable: 'jan', value: 0 ,key:'a'},
        { lable: 'feb', value: 0 ,key:'s'},
        { lable: 'mar', value: 0 ,key:'d'},
        { lable: 'apr', value: 0 ,key:'f'},
        { lable: 'may', value: 0 ,key:'z'},
        { lable: 'jun', value: 0 ,key:'x'},
        { lable: 'jul', value: 0 ,key:'c'},
        { lable: 'aug', value: 0 ,key:'v'},
        { lable: 'sep', value: 0 ,key:'g'},
        { lable: 'oct', value: 0 ,key:'b'},
        { lable: 'nov', value: 0 ,key:'n'},
        { lable: 'dec', value: 0 ,key:'h'}
    ];

    console.log(chartDataPoints)

    for (const expense of props.expenses) {
        const expenesMonth = expense.date.getMonth(); // starting at 0 => january
        chartDataPoints[expenesMonth].value += expense.price;
    }
    return (
        <Chart dataPoints={ chartDataPoints} />
    )
}

export default ExpenseChart;