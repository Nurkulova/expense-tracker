import React from 'react'
import ExpenseItem from './ExpenseItem'
import styled from 'styled-components';

const ExpensesListContainer = styled.div``;

const ExpensesListFallback = styled.h1`
  color: white;
  text-align: center;
`;

const ExpensesListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {

	return (
		<ExpensesListContainer>
      {expenses.length === 0 && (
        <ExpensesListFallback>No Expenses</ExpensesListFallback>
      )}
      {expenses.length > 0 && (
        <ExpensesListUl>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                onDeleteExpense={onDeleteExpense}
                date={expense.date}
                title={expense.title}
                id={expense.id}
                amount={expense.amount}
              />
            );
          })}
        </ExpensesListUl>
      )}
    </ExpensesListContainer>
	)
}

export default ExpenseList
