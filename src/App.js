import { useState } from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/new-expense/NewExpense'
import './App.css';
const EXPENSES = [
	{
		id: 'e1',
		title: 'Food',
		amount: 94.12,
		date: new Date(2023, 7, 14),
	},
	{
		id: 'e2',
		title: 'Playstation 5',
		amount: 799.49,
		date: new Date(2022, 2, 12),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2020, 5, 12),
	},
]

function App() {
	const [expenses, setExpenses] = useState(EXPENSES)

	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})
	}

	const deleteExpenseByIdHandler = (id) => {
		setExpenses((prevExpenses) =>
			prevExpenses.filter((expense) => expense.id !== id),
		)
	}

	const [sortOrder, setSortOrder] = useState('desc');

	const sortExpenses = (order) => {
		let sortedExpenses = [...expenses];
	
		switch (order) {
		  case 'desc':
			sortedExpenses.sort((a, b) => b.amount - a.amount);
			break;
		  case 'asc':
			sortedExpenses.sort((a, b) => a.amount - b.amount);
			break;
		  case 'newest':
			sortedExpenses.sort((a, b) => b.date - a.date);
			break;
		  case 'name':
			sortedExpenses.sort((a, b) => a.title.localeCompare(b.title));
			break;
		  default:
			break;
		}
	
		setExpenses(sortedExpenses);
		setSortOrder(order);
	  };

	return (
		<div className="app">
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
				<div className="buttons">
					<button
					className={sortOrder === 'desc' ? 'active' : ''}
					onClick={() => sortExpenses('desc')}
					>
					По убыванию
					</button>
					<button
					className={sortOrder === 'asc' ? 'active' : ''}
					onClick={() => sortExpenses('asc')}
					>
					По возрастанию
					</button>
					<button
					className={sortOrder === 'newest' ? 'active' : ''}
					onClick={() => sortExpenses('newest')}
					>
					По новизне
					</button>
					<button
					className={sortOrder === 'name' ? 'active' : ''}
					onClick={() => sortExpenses('name')}
					>
					По имени
					</button>
				</div>
			<Expenses
				expenses={expenses}
				onDeleteExpense={deleteExpenseByIdHandler}
			/>
		</div>
	)
}

export default App
