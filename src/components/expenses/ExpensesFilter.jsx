import React from 'react'
import styled from 'styled-components';

const ExpensesFilterWrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;

const ExpensesFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const ExpensesFilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ExpensesFilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

const ExpensesFilter = ({ selectedYear, onSelectedYearChange }) => {
	return (
		<ExpensesFilterWrapper>
		<ExpensesFilterControl>
		  <ExpensesFilterLabel htmlFor='filter'>Filter by year:</ExpensesFilterLabel>
		  <ExpensesFilterSelect
			id='filter'
			value={selectedYear}
			onChange={onSelectedYearChange}
		  >
			<option value='2023'>2023</option>
			<option value='2022'>2022</option>
			<option value='2021'>2021</option>
			<option value='2020'>2020</option>
			<option value='All'>All</option>
		  </ExpensesFilterSelect>
		</ExpensesFilterControl>
	  </ExpensesFilterWrapper>
	)
}

export default ExpensesFilter
