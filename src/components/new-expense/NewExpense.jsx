import React, { useState } from 'react'
import Button from '../UI/button/Button'
import ExpenseForm from './ExpenseForm'
import styled from 'styled-components';

const NewExpenseWrapper = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const NewExpense = ({ onAddNewExpense }) => {
	const [isFormShow, setIsFormShow] = useState(false)

	const showFormHandler = () => {
		setIsFormShow(true)
	}
	const closeFormHandler = () => setIsFormShow(false)

	return (
		<NewExpenseWrapper>
			{isFormShow ? (
				<ExpenseForm
					onAddNewExpense={onAddNewExpense}
					onCloseForm={closeFormHandler}
				/>
			) : (
				<Button onClick={showFormHandler}>Добавить новый расход</Button>
			)}
		</NewExpenseWrapper>
	)
}


export default NewExpense
