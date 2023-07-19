import React from 'react'
import styled from 'styled-components';

const ExpenseDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  .expense-date__month {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .expense-date__year {
    font-size: 0.75rem;
  }

  .expense-date__day {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const day = props.date.toLocaleString('en-US', { day: '2-digit' })
	const year = props.date.getFullYear()
	return (
		<ExpenseDateWrapper>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-date__day'>{day}</div>
		</ExpenseDateWrapper>
	)
}

export default ExpenseDate
