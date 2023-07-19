import React from "react";
import Card from "../UI/card/Card";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import styled from "styled-components";

const ExpenseItemCard = styled(Card)`
    display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	margin: 1rem 0;
	background-color: #4b4b4b;
`;


const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const ExpenseItemTitle = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`;

const ExpenseItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
	<ExpenseItemCard>
	<ExpenseDate date={date} />
	<ExpenseItemDescription>
	  <ExpenseItemTitle>{title}</ExpenseItemTitle>
	  <ExpenseItemPrice>${amount}</ExpenseItemPrice>
	</ExpenseItemDescription>
	<Button
	  style={{ marginLeft: '1rem' }}
	  onClick={() => {
		onDeleteExpense(id);
	  }}
	>
	  Delete
	</Button>
  </ExpenseItemCard>
  );
};

export default ExpenseItem;
